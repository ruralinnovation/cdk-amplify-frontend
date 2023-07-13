#!/usr/bin/env Rscript
# Title     : Execute Shiny App
# Objective : Initialize Plumber and run Shiny app as "future" (background) worker as defined by local app.R or server.R/ui.R
# Created by: John Hall
library("future")
library("httr")
library("httpuv")
library("magrittr")
library("plumber")
library("shiny")
library("stringr")
library("uuid")
library("websocket")
library("withr")
library("R6")

args <- commandArgs(trailingOnly = TRUE)
appDir <- getwd()
local_lib <- .libPaths()[1]
local_port <- as.numeric("3000")
# shiny_port <- httpuv::randomPort()
shiny_port <- if (randomPort(min = 1220L, max = 1221L, host = "127.0.0.1", n = 1)) {
    1221L
} else {
    httpuv::randomPort(host = "127.0.0.1", n = 20)
}

if (exists("args") && !is.null(args) && !is.na(args[1])) {
    if (!grepl("install", args[1])) {
        # Update path to app and lib
        if (!grepl("/", args[1])) {
            if (grepl("local", args[1])) {
                local_lib <- paste0(getwd(), "/lib")
                .libPaths(c(.libPaths(), local_lib))
            } else if (dir.exists(paste0(getwd(), "/", args[1]))) {
                appDir <- paste0(getwd(), "/", args[1])
            }
            # } else {
            #   appDir <- args[1]
            #   setwd(appDir)
        } else if (dir.exists(paste0(getwd(), "/", args[1]))) {
            appDir <- paste0(getwd(), "/", args[1])
        } else if (dir.exists(args[1])) {
            appDir <- args[1]
        } else {
            message(paste0("Cannot find app direcotry: ", args[1]))
            stop()
        }

    }

    if (!is.na(args[2]) && grepl("local", args[2])) {
        # Install packages to ./lib instead of user library
        local_lib <- paste0(getwd(), "/lib")
        .libPaths(c(.libPaths(), local_lib))

    } else if (!is.na(args[2]) && !grepl("install", args[2])) {
        # Change server port from 3000 to ...
        local_port <- switch(
          as.character(as.numeric(args[2])),
          "NA" = 3000,
          as.numeric(args[2])
        )
    }
}

if (!dir.exists(local_lib)) {
    dir.create(local_lib)
}

if (dir.exists("renv") && file.exists(".Rprofile")) {
    local_lib <- paste0("renv/library/R-", version$major, ".", substr(version$minor,1,1), "/", version$platform)
    print(paste0("Use lib: ", local_lib))
    if (!require("renv")) {
        install.packages("renv")
    }
    renv::restore(library = local_lib, prompt = FALSE)

} else if (dir.exists("packrat")) tryCatch(
  withr::with_libpaths(local_lib, {
      if (!grepl("local", args[2]))
        try({
            print("Packrat config detected!")
            local_lib <- paste0("packrat/lib/", version$platform, "/", version$major, ".", version$minor)
            if (!file.exists(".Rprofile")) packrat::init()
            system(paste0("rm -rf ", local_lib, "/00LOCK-*"))
            packrat::restore(overwrite.dirty = TRUE)
        })
  }),
  error = function(e) {

      install.packages("withr")

      # DEBUG
      message(e)

      print("Packrat config detected!")
      local_lib <- paste0("packrat/lib/", version$platform, "/", version$major, ".", version$minor)
      if (!file.exists(".Rprofile") && dir.exists("packrat")) packrat::init()
      system(paste0("rm -rf ", local_lib, "/00LOCK-*"))
      packrat::restore(overwrite.dirty = TRUE)
  },
  finally = print(paste0("Use lib: ", local_lib))

)

install_package_deps <- function () {
    library(devtools)

    no_error <- FALSE

    if (any(nzchar(Sys.getenv("GITHUB_TOKEN")))) {
        auth_token <- Sys.getenv("GITHUB_TOKEN")
        if (!any(nzchar(Sys.getenv("GITHUB_PAT")))) {
            Sys.setenv(GITHUB_PAT = auth_token)
        }
    } else {
        auth_token <- Sys.getenv("GITHUB_PAT")
    }

    print(paste0("GITHUB_PAT: ", Sys.getenv("GITHUB_PAT")))

    if (file.exists(paste0(appDir, "/package.csv")) || file.exists(paste0(getwd(), "/package.csv"))) {

        if (!require("hrbrthemes")) {
            install.packages("hrbrthemes", lib = local_lib)
            hrbrthemes::import_roboto_condensed()
        }

        packages <- read.csv(
          switch(
            as.character(file.exists(paste0(appDir, "/package.csv"))),
            "TRUE" = paste0(appDir, "/package.csv"),
            "FALSE" = paste0(getwd(), "/package.csv")
          ),
          header = FALSE, sep = ",", as.is = TRUE, col.names = c("package", "path_version"))

        for (p in rownames(packages)) {
            package_idx <- as.numeric(p)
            package <- packages$package[package_idx]
            print(paste0(package, ": ", packages$path_version[package_idx]))

            try({
                if (grepl("/", packages$path_version[package_idx])) {
                    github_path <- trimws(packages$path_version[package_idx])
                    if (!require(as.character(package[1]), character.only = TRUE)) {
                        message(sprintf(
                          'devtools::install_github("%s", lib = "%s", upgrade = "never", auth_token = "%s")',
                          github_path, local_lib, auth_token))
                        devtools::install_github(github_path, lib = local_lib, upgrade = "never", auth_token = auth_token)
                    }
                } else {
                    version_string <- trimws(packages$path_version[package_idx])
                    if (!require(as.character(package[1]), character.only = TRUE) || version_string != as.character(packageVersion(package[1]))) {
                        message(sprintf(
                          'devtools::install_version("%s", lib = "%s", upgrade = "never", auth_token = "%s", version = "%s")',
                          package, local_lib, auth_token, version_string))
                        devtools::install_version(package, lib = local_lib, upgrade = "never", version = version_string)
                    }
                }
            })

            if (!require(package[1], character.only = TRUE)) {
                if (dir.exists(paste0(local_lib, "/", package[1]))) {
                    devtools::install_deps(paste0(local_lib, "/", package[1]), lib = local_lib, upgrade = "never", dependencies = TRUE)
                }
                install.packages(package, lib = local_lib)
            }
        }

        no_error <- TRUE
    }

    no_error
}

no_error <- FALSE

while (!no_error) tryCatch(
  withr::with_libpaths(local_lib, {

      if (exists("args") && !is.null(args) && (grepl("install", args[1]) || grepl("install", args[2]))) {
          if (!require("devtools") || !require("stringi") || !require("stringr")) {
              install.packages(c("cli", "glue", "devtools", "stringr", "tidyverse", "usethis"), lib = local_lib)
          }

          no_error <- install_package_deps()

          if (dir.exists("packrat") && !grepl("local", args[2])) {
              if (!file.exists(".Rprofile")) packrat::init()
              print("Before taking a new packrat snapshot, try to remove LOCK dirs: ")
              system("mkdir -p del")
              print(paste0("mv ", local_lib, "/00LOCK-* del/"))
              system(paste0("mv ", local_lib, "/00LOCK-* del/"))
              system("ls -l del/*")
              print("rm -rf del")
              system("rm -rf del")
              packrat::snapshot(ignore.stale = TRUE)
              print("Snapshot saved.")
              print("Replace lib-R linked directory with actual libraries:")
              print('for f in $(find packrat/lib-R/x86_64-pc-linux-gnu/3.5.1/ -name "[A-Za-z]*"); do lib_path=$(ls -l $f | grep -oP "(\\/var\\/.+)"); if [ $lib_path ]; then rm $f && cp -ar $lib_path packrat/lib-R/x86_64-pc-linux-gnu/3.5.1/; fi; done;')
              system('for f in $(find packrat/lib-R/x86_64-pc-linux-gnu/3.5.1/ -name "[A-Za-z]*"); do lib_path=$(ls -l $f | grep -oP "(\\/var\\/.+)"); if [ $lib_path ]; then rm $f && cp -ar $lib_path packrat/lib-R/x86_64-pc-linux-gnu/3.5.1/; fi; done;')
              print("Attempting bundle...")
              packrat::bundle(file = "packrat.tar.gz")
              if (file.exists("packrat.tar.gz")) {
                  print("Bundle saved.")
              }
          }

          print("Installation finished.")

      } else {

          future_cluster <- future::makeClusterPSOCK(2) #future::availableCores())
          parallelly::autoStopCluster(future_cluster)

          for (cl_idx in seq_along(future_cluster)) {
              parallel:::sendCall(future_cluster[[cl_idx]], fun = Sys.getpid, args = list())
              cl_pid <- parallel:::recvResult(future_cluster[[cl_idx]])
              attr(future_cluster[[cl_idx]]$host, "pid") <- cl_pid
          }

          future::plan(future::cluster, workers = future_cluster)

          options(shiny.host = "0.0.0.0") # listen on all available network interfaces
          options(shiny.port = shiny_port)
          #options(shiny.launch.browser = .rs.invokeShinyWindowExternal)

          print(paste0("Run Shiny app: ", appDir))
          print(paste0("Use local dir: ", getwd()))
          print(list.files(appDir))
          print(paste0("Use local lib: ", local_lib))
          print(.libPaths())

          shiny_fallback_app <- shiny::shinyApp(
            ui = function() { shiny::fluidPage(h1("This is a test app")) },
            server = function(input, output, session) {}
          )

          if (grepl("/", appDir)) {
              print(paste0("Launching Shiny app (http://127.0.0.1:", shiny_port, ") in future worker cluster..."))

              shiny_app_future <- future::future({
                  shiny_app <- shiny::runApp(
                    app = if (file.exists(paste0(appDir, "/server.R"))) {
                        print(paste0("With ", appDir, "/server.R: ", file.exists(paste0(appDir, "/server.R"))))
                        appDir
                    } else if (file.exists(paste0(appDir, "/app.R"))) {
                        print(paste0("With ", appDir, "/app.R: ", file.exists(paste0(appDir, "/app.R"))))
                        appDir
                    } else {
                        shiny_fallback_app
                    },
                    host = "0.0.0.0",
                    port = shiny_port,
                    launch.browser = FALSE
                  )

                  return(NULL)
              })

          } else {
              print(paste0("Launching Shiny app (http://127.0.0.1:", shiny_port, ") in future worker cluster..."))

              shiny_app_future <- future::future({
                  shiny_app <- shiny::runApp(
                    app = if (file.exists("server.R")) {
                        print(paste0("With server.R: ", file.exists("server.R")))
                        getwd()
                    } else if (file.exists("app.R")) {
                        print(paste0("With app.R: ", file.exists("app.R")))
                        getwd()
                    } else if (file.exists("src/app.R")) {
                        setwd("src")
                        print(paste0("With app.R: ", file.exists("app.R")))
                        getwd()
                    } else {
                        shiny_fallback_app
                    },
                    host = "0.0.0.0",
                    port = shiny_port,
                    launch.browser = FALSE
                  )

                  return(NULL)
              })
          }

          # From https://gabrielcp.medium.com/going-real-time-in-r-plumber-with-websockets-93547c767412
          PlumberWebSocket <- R6::R6Class(
            "PlumberWebSocket",
            inherit = plumber::Plumber,
            public = list(
              onWSOpen = function(ws) {
                  if (is.function(private$ws_open)) {
                      private$ws_open(ws)
                  }
                  invisible(self)
              },
              websocket = function(open = NULL) {
                  if (!is.null(open)) stopifnot(is.function(open))
                  private$ws_open <- open
              }
            ),
            private = list(
              ws_open = NULL
            )
          )

          plumbr <- PlumberWebSocket$new()

          plumbr$onWSOpen()

          ws_clients <- list()

          addWebSocketClient <- function(ws_client, message) {
              ws_client$request$uuid <- UUIDgenerate()

              print(ws_clients)

              for(client in ws_clients) {
                  print(ws_clients)
                  print("\n")
              }

              print(ws_client$request$uuid %in% names(ws_clients))

              if (!(ws_client$request$uuid %in% names(ws_clients))) {
                  ws_clients[[ws_client$request$uuid]] <<- ws_client #<<- modifies ws_clients globally

                  ws_client$onClose(function() {
                      removeWebSocketClient(ws_client$request$uuid)
                  })

                  ws_client$request$ws_shiny <- websocket::WebSocket$new(paste0("ws://127.0.0.1", ":", shiny_port, "/"))
                  ws_client$request$ws_shiny$connect()
                  ws_client$request$ws_shiny$onMessage(function(event) {
                      # print("Relay Shiny server event message to websocket client...")
                      print(event)
                      ws_client$send(event$data)
                  })
              }
              return(ws_clients)
          }

          removeWebSocketClient <- function(uuid) {
              ws_clients[[uuid]] <<- NULL
          }

          handleWebSocketEvent <- function(pr) {
              pr$websocket(
                function (ws_client) {
                    addWebSocketClient(ws_client)
                    print("New user connected!")

                    ws_client$onMessage(function(binary, event) {
                        if ("ws_shiny" %in% names(ws_client$request)) {
                            # print("Relay websocket message to Shiny server...")
                            # print(event)
                            Sys.sleep(0.0125)
                            ws_client$request$ws_shiny$send(as.character(event))
                        }
                    })

                }
              )

              pr
          }

          handleFileRequests <- function (req, res) {
              cat(paste0("http://", req$REMOTE_ADDR, ":", shiny_port, req$PATH_INFO, "\n"))

              file_path <- stringr::str_replace_all(req$PATH_INFO, "/www", "")
              cat(paste0(file_path, "\n"))

              # httr_target <- httr::GET(paste0("http://", req$REMOTE_ADDR, ":", shiny_port, file_path))
              httr_target <- httr::GET(paste0("http://127.0.0.1:", shiny_port, file_path))

              # print(names(req$HEADERS))
              print(req$HEADERS["accept"])

              if (
                grepl("gif", req$HEADERS["accept"]) ||
                  grepl("jpeg", req$HEADERS["accept"]) ||
                  grepl("png", req$HEADERS["accept"]) ||
                  grepl("woff", req$HEADERS["accept"])
              ) {
                  httr_result <- httr::content(httr_target, as = "raw")
                  print("requesting binary file")
                  # print(as.character(httr_result))
              } else {
                  httr_result <- httr::content(httr_target, as = "text", encoding ="UTF-8")
                  # print(httr_result)
              }

              httr_result
          }

          plumbr %>%
            handleWebSocketEvent %>%
            plumber::pr_filter("globalFilter", function (req, res) {
                cat(as.character(Sys.time()), "-",
                  req$REQUEST_METHOD, req$PATH_INFO, "-",
                  req$HTTP_USER_AGENT, "@", req$REMOTE_ADDR, "\n"
                )

                ## API && Swagger Filter ----
                if (as.character(req$PATH_INFO) != "/" &&
                  !grepl("/__api__", as.character(req$PATH_INFO)) &&
                  !grepl("/__docs__", as.character(req$PATH_INFO)) &&
                  !grepl("/openapi", as.character(req$PATH_INFO))
                ) {
                    # Process file request as if it had the static file prefix ("www/")
                    req$PATH_INFO <- paste0("/www", as.character(req$PATH_INFO))
                }   # else { Let default plumber handlers process API and/or Swagger __docs__ request }

                ## CORS access
                res$setHeader("Access-Control-Allow-Origin", "*")

                if (req$REQUEST_METHOD == "OPTIONS") {
                    res$setHeader("Access-Control-Allow-Methods","*")
                    res$setHeader("Access-Control-Allow-Headers", req$HTTP_ACCESS_CONTROL_REQUEST_HEADERS)
                    res$status <- 200
                    return(list())
                } else {
                    plumber::forward()
                }
            }) %>%
            plumber::pr_mount("/__api__", pr("modules/plumber.R")) %>% # <- mount additional routes under "/__api__" %>%
            (function (pr) {
                ## Proxy routes to files served by Shiny app ----
                pr %>%
                  plumber::pr_handle(c("GET", "POST"), "/", function (req, res) {
                      # "<html>
                      #   <h1>Hello, World!</h1>
                      # </html>"

                      handleFileRequests(req, res)

                  }, serializer = plumber::serializer_html()) %>%
                  plumber::pr_handle(c("GET", "POST"), "/www/<file>.css", function (path1, file, req, res) {

                      handleFileRequests(req, res)

                  }, serializer = plumber::serializer_text(
                    serialize_fn = as.character,
                    type = "text/css"
                  )) %>%
                  plumber::pr_handle(c("GET", "POST"), "/www/<file>.js", function (path1, file, req, res) {

                      handleFileRequests(req, res)

                  }, serializer = plumber::serializer_text(
                    serialize_fn = as.character,
                    type = "application/javascript"
                  ))  %>%
                  plumber::pr_handle(c("GET", "POST"), "/www/<file>.svg", function (file, req, res) {

                      handleFileRequests(req, res)

                  }, serializer = plumber::serializer_text(
                    serialize_fn = as.character,
                    type = "image/svg+xml"
                  )) %>%
                  plumber::pr_handle(c("GET", "POST"), "/www/<file>.woff2", function (path1, file, req, res) {

                      handleFileRequests(req, res)

                  }, serializer = plumber::serializer_octet(
                    serialize_fn = as.raw,
                    type = "application/font-woff2"
                  ))  %>%
                  plumber::pr_handle(c("GET", "POST"), "/www/<file>", function (file, req, res) {

                      handleFileRequests(req, res)

                  }) %>%
                  plumber::pr_handle(c("GET", "POST"), "/www/<path1>/<file>.css", function (path1, file, req, res) {

                      handleFileRequests(req, res)

                  }, serializer = plumber::serializer_text(
                    serialize_fn = as.character,
                    type = "text/css"
                  )) %>%
                  plumber::pr_handle(c("GET", "POST"), "/www/<path1>/<file>.gif", function (path1, file, req, res) {

                      handleFileRequests(req, res)

                  }, serializer = plumber::serializer_png(
                    serialize_fn = as.raw,
                    type = "image/gif"
                  )) %>%
                  plumber::pr_handle(c("GET", "POST"), "/www/<path1>/<file>.jpeg", function (path1, file, req, res) {

                      handleFileRequests(req, res)

                  }, serializer = plumber::serializer_jpeg(
                    serialize_fn = as.raw,
                    type = "image/jpeg"
                  )) %>%
                  plumber::pr_handle(c("GET", "POST"), "/www/<path1>/<file>.jpg", function (path1, file, req, res) {

                      handleFileRequests(req, res)

                  }, serializer = plumber::serializer_jpeg(
                    serialize_fn = as.raw,
                    type = "image/jpeg"
                  )) %>%
                  plumber::pr_handle(c("GET", "POST"), "/www/<path1>/<file>.js", function (path1, file, req, res) {

                      handleFileRequests(req, res)

                  }, serializer = plumber::serializer_text(
                    serialize_fn = as.character,
                    type = "application/javascript"
                  )) %>%
                  plumber::pr_handle(c("GET", "POST"), "/www/<path1>/<file>.pdf", function (path1, file, req, res) {

                      handleFileRequests(req, res)

                  }, serializer = plumber::serializer_pdf(
                    serialize_fn = as.raw,
                    type = "application/pdf"
                  )) %>%
                  plumber::pr_handle(c("GET", "POST"), "/www/<path1>/<file>.png", function (path1, file, req, res) {

                      handleFileRequests(req, res)

                  }, serializer = plumber::serializer_png(
                    serialize_fn = as.raw,
                    type = "image/png"
                  )) %>%
                  plumber::pr_handle(c("GET", "POST"), "/www/<path1>/<file>.svg", function (path1, file, req, res) {

                      handleFileRequests(req, res)

                  }, serializer = plumber::serializer_text(
                    serialize_fn = as.character,
                    type = "image/svg+xml"
                  )) %>%
                  plumber::pr_handle(c("GET", "POST"), "/www/<path1>/<file>.woff2", function (path1, file, req, res) {

                      handleFileRequests(req, res)

                  }, serializer = plumber::serializer_octet(
                    serialize_fn = as.raw,
                    type = "application/font-woff2"
                  )) %>%
                  plumber::pr_handle(c("GET", "POST"), "/www/<path1>/<file>", function (path1, file, req, res) {

                      handleFileRequests(req, res)

                  }) %>%
                  plumber::pr_handle(c("GET", "POST"), "/www/<path1>/<path2>/<file>.css", function (path1, path2, file, req, res) {

                      handleFileRequests(req, res)

                  }, serializer = plumber::serializer_text(
                    serialize_fn = as.character,
                    type = "text/css"
                  )) %>%
                  plumber::pr_handle(c("GET", "POST"), "/www/<path1>/<path2>/<file>.js", function (path1, path2, file, req, res) {

                      handleFileRequests(req, res)

                  }, serializer = plumber::serializer_text(
                    serialize_fn = as.character,
                    type = "application/javascript"
                  )) %>%
                  plumber::pr_handle(c("GET", "POST"), "/www/<path1>/<path2>/<file>", function (path1, path2, file, req, res) {

                      handleFileRequests(req, res)

                  }) %>%
                  plumber::pr_handle(c("GET", "POST"), "/www/<path1>/<path2>/<path3>/<file>.css", function (path1, path2, path3, file, req, res) {

                      handleFileRequests(req, res)

                  }, serializer = plumber::serializer_text(
                    serialize_fn = as.character,
                    type = "text/css"
                  )) %>%
                  plumber::pr_handle(c("GET", "POST"), "/www/<path1>/<path2>/<path3>/<file>.js", function (path1, path2, path3, file, req, res) {

                      handleFileRequests(req, res)

                  }, serializer = plumber::serializer_text(
                    serialize_fn = as.character,
                    type = "application/javascript"
                  )) %>%
                  plumber::pr_handle(c("GET", "POST"), "/www/<path1>/<path2>/<path3>/<file>", function (path1, path2, path3, file, req, res) {

                      handleFileRequests(req, res)

                  }) %>%
                  plumber::pr_static("/www/", "www/")

                # return(pr)

            })() %>%
            plumber::pr_hook("exit", function(){
                print("Stop the future cluster (bg workers)...")
                try({
                    tryCatch(
                    {
                        future_host <- shiny_app_future$workers[[shiny_app_future$node]]$host
                        print(future_host)
                        pid <- attr(future_host, "pid")
                        print(pid)
                        tools::pskill(pid)
                    },
                      finally = function () {
                          parallel::stopCluster(future_cluster)
                      }
                    )
                })

                print("Done!")
            }) %>%
            plumber::pr_run(
              host = "0.0.0.0",
              port = local_port
            )

      }

      no_error <- TRUE

  }),
  error = function(e) {

      # DEBUG
      message(e)

      #if (!no_error) {
      if (!is.null(e) && !is.na(e$message) && grepl("package", e$message))
        withr::with_libpaths(local_lib, {

            print(sprintf("ERROR: %s", e$message))

            str_pattern <- paste0("(?:package\\scalled|namespace) ['|‘]([\\w]+)")
            package_match <- stringr::str_match(e$message, str_pattern)[,2]
            print(paste0("Missing package match: ", package_match))

            if (!is.null(package_match) && !is.na(package_match) && !require(package_match[1], character.only = TRUE)) {
                if (dir.exists(paste0(local_lib, "/", package_match))) {
                    if (!require("devtools") || !require("stringi") || !require("stringr")) {
                        install.packages(c("cli", "glue", "devtools", "stringr", "tidyverse", "usethis"))
                    }
                    devtools::install_deps(paste0(local_lib, "/", package_match), lib = local_lib, upgrade = "never", dependencies = TRUE)
                }
                install.packages(package_match, lib = local_lib)
            }

            install_package_deps()

        })
      else quit(save = "no", status = 1, runLast = FALSE)

  },
  finally = "Shiny app terminated."
)
