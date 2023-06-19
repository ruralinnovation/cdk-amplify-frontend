##FROM docker.io/rocker/shiny-verse:4.2.1 as base
##FROM public.ecr.aws/l2v0f2h3/rocker/shiny-verse:4.2.1 as base
#FROM public.ecr.aws/l2v0f2h3/rocker/shiny-verse:latest as base
#
#ARG gh_token
#ENV GITHUB_TOKEN=$gh_token
#ARG gh_token
#ENV GITHUB_PAT=$gh_token
#
#RUN apt update -y && \
#    apt purge -y ca-certificates-java && apt install -y ca-certificates-java && \
#    apt install -y ca-certificates libgdal-dev libharfbuzz-dev libfribidi-dev libv8-dev libjq-dev libmagick++-dev \
#      libprotobuf-dev protobuf-compiler libudunits2-dev procps libsodium-dev  libudunits2-dev && \
#    update-ca-certificates -f -v
#
#RUN Rscript -e '\
#    local({ r <- getOption("repos"); r["CRAN"] <- "http://cran.r-project.org"; options(repos=r); }); \
#    update.packages(ask = FALSE, checkBuilt = TRUE); \
#    install.packages(c( \
#      "R6", "cli", "devtools", "future", "geojsonio", "hrbrthemes", "httr", "httpuv", "leaflet", "magick", "packrat", "plumber", \
#      "remoter", "remotes", "renv", "sf", "shiny", "stringi", "stringr", "tidyverse", "tools", "uuid", "websocket", "withr" \
#    ));'
#
##FROM 312512371189.dkr.ecr.us-east-1.amazonaws.com/coriverse/shinyapps:latest
#
#WORKDIR /srv/shiny-server
#
#COPY renv.lock renv.lock
#
#RUN Rscript -e '\
#    version; \
#    print(paste0("GITHUB_PAT: ", Sys.getenv("GITHUB_PAT")));  \
#    renv::activate(); \
#    renv::restore(clean = FALSE); \
#'
#
#COPY .exec-shiny-app.R .exec-shiny-app.R
### Fix incorrect (windows) line-ending that keep this script from running on linux
#RUN bash -c "cp .exec-shiny-app.R .exec-shiny-app.R.bak && \
#    sed $'s/\r$//' .exec-shiny-app.R.bak > .exec-shiny-app.R && \
#    chmod +x .exec-shiny-app.R; \
#"
#
#RUN mkdir -p /srv/shiny-server/data
#RUN chmod -R ga+rw /srv/shiny-server/*
#RUN chmod +x /srv/shiny-server/.exec-shiny-app.R
#
##CMD /usr/bin/bash
##CMD /usr/bin/shiny-server
#CMD /srv/shiny-server/.exec-shiny-app.R


#FROM docker.io/coriverse/shinyapps:amplify-frontend as previous
FROM 312512371189.dkr.ecr.us-east-1.amazonaws.com/coriverse/shinyapps:amplify-frontend as previous
#FROM docker.io/rocker/shiny-verse:4.2.1 as app
#FROM public.ecr.aws/l2v0f2h3/rocker/shiny-verse:4.2.1 as app
FROM public.ecr.aws/l2v0f2h3/rocker/shiny-verse:latest as app

ENV APP_NAME=frontend

ARG gh_token
ENV GITHUB_PAT=$gh_token

WORKDIR /srv/shiny-server

## TODO: INIT; COMMENT OUT AFTER FIRST RUN...
#RUN bash -c "pwd; \
#    if ! [[ -d $APP_NAME ]]; \
#         then mkdir -p $APP_NAME; \
#    fi; \
#    rm -rf /srv/shiny-server/renv* \
#    && rm -rf /srv/shiny-server/$APP_NAME/renv* \
#"
## END INIT

FROM public.ecr.aws/l2v0f2h3/rocker/shiny-verse:4.2.1 as app
#FROM public.ecr.aws/l2v0f2h3/rocker/shiny-verse:latest as app
#FROM 312512371189.dkr.ecr.us-east-1.amazonaws.com/coriverse/shinyapps:latest as app

#COPY --from=base /root/.cache/  /root/.cache/
COPY --from=previous /root/.cache/  /root/.cache/
#COPY --from=base /srv/shiny-server /srv/shiny-server
COPY --from=previous /srv/shiny-server/$APP_NAME /srv/shiny-server/$APP_NAME

ENV APP_NAME=frontend

ARG gh_token
ENV GITHUB_PAT=$gh_token

WORKDIR /srv/shiny-server

## TODO: INIT; COMMENT OUT AFTER FIRST RUN...
#RUN bash -c "pwd; \
#    if ! [[ -d $APP_NAME ]]; \
#         then mkdir -p $APP_NAME; \
#    fi; \
#    rm -rf /srv/shiny-server/renv* \
#    && rm -rf /srv/shiny-server/$APP_NAME/renv* \
#"
## END INIT

FROM public.ecr.aws/l2v0f2h3/rocker/shiny-verse:4.2.1 as app
#FROM public.ecr.aws/l2v0f2h3/rocker/shiny-verse:latest as app
#FROM 312512371189.dkr.ecr.us-east-1.amazonaws.com/coriverse/shinyapps:latest as app

#COPY --from=base /root/.cache/  /root/.cache/
COPY --from=previous /root/.cache/  /root/.cache/
#COPY --from=base /srv/shiny-server /srv/shiny-server
COPY --from=previous /srv/shiny-server/$APP_NAME /srv/shiny-server/$APP_NAME

RUN apt update -y && \
    apt install -y ca-certificates libgdal-dev libharfbuzz-dev libfribidi-dev libv8-dev libjq-dev nano \
    libmagick++-dev libprotobuf-dev protobuf-compiler libudunits2-dev procps libsodium-dev  libudunits2-dev

ENV APP_NAME=frontend

ARG gh_token
ENV GITHUB_PAT=$gh_token

WORKDIR /srv/shiny-server/$APP_NAME

RUN echo $(ls -A)

COPY app.R app.R
COPY data data/
COPY modules modules/
COPY templates templates/
COPY www www/
COPY README.md README.md

#COPY .Renviron .Renviron
COPY renv.lock renv.lock
COPY renv/activate.R renv/activate.R
COPY renv/settings.dcf renv/settings.dcf

RUN chmod -R ga+rw /srv/shiny-server/$APP_NAME

RUN Rscript -e '\
    version; \
    options(repos = list(CRAN = "https://cloud.r-project.org/")); \
    print(paste0("GITHUB_PAT: ", Sys.getenv("GITHUB_PAT")));  \
    renv::activate(); \
    renv::restore(clean = FALSE); \
'

##COPY .exec-shiny-app.R .exec-shiny-app.R
COPY .exec-shiny-app.R .exec-shiny-app.R.bak
## Fix incorrect (windows) line-ending that keep this script from running on linux
RUN bash -c "sed $'s/\r$//' .exec-shiny-app.R.bak > .exec-shiny-app.R && \
    chmod +x .exec-shiny-app.R; \
"

RUN chmod +x /srv/shiny-server/$APP_NAME/.exec-shiny-app.R

## Install dependency updates
RUN bash -c "/srv/shiny-server/$APP_NAME/.exec-shiny-app.R install ."

## Remove the local environment vars from this build
#RUN bash -c "if [[ -e .env.local ]]; \
#        then mv .env.local .env.local.bak; \
#    fi; \
#    if [[ -e .env.development.local ]]; \
#        then mv .env.development.local .env.development.local.bak; \
#    fi \
#"
##CMD /usr/bin/bash
##CMD /usr/bin/shiny-server
CMD /srv/shiny-server/$APP_NAME/.exec-shiny-app.R

#ENTRYPOINT [ "/usr/local/bin/Rscript" ]

EXPOSE 3000
EXPOSE 3838
EXPOSE 5174
