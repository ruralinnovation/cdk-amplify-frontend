#FROM public.ecr.aws/l2v0f2h3/rocker/shiny-verse as base
#
#ARG gh_token
#ENV GITHUB_TOKEN=$gh_token
#ARG gh_token
#ENV GITHUB_PAT=$gh_token
#
#RUN apt update -y && \
#    apt purge -y ca-certificates-java && apt install -y ca-certificates-java && \
#    apt install -y ca-certificates libgdal-dev libharfbuzz-dev libfribidi-dev \
#    libprotobuf-dev libv8-dev protobuf-compiler libudunits2-dev procps libsodium-dev && \
#    update-ca-certificates -f -v
#
#RUN Rscript -e 'local({ r <- getOption("repos"); r["CRAN"] <- "http://cran.r-project.org"; options(repos=r); }); install.packages(c("R6", "cli", "devtools", "future", "hrbrthemes", "httr", "httpuv", "leaflet", "packrat", "plumber", "remoter", "remotes", "renv", "sf", "shiny", "stringr", "tidyverse", "tools", "uuid", "websocket", "withr"));'
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


FROM docker.io/coriverse/shinyapps:amplify-frontend as previous
FROM docker.io/rocker/shiny-verse:latest as app
#FROM 312512371189.dkr.ecr.us-east-1.amazonaws.com/coriverse/shinyapps:amplify-frontend as previous
#FROM public.ecr.aws/l2v0f2h3/rocker/shiny-verse:latest as app

ENV APP_NAME=frontend

ARG gh_token
ENV GITHUB_PAT=$gh_token

#COPY --from=base /root/.cache/  /root/.cache/
COPY --from=previous /root/.cache/  /root/.cache/
#COPY --from=base /srv/shiny-server /srv/shiny-server
COPY --from=previous /srv/shiny-server /srv/shiny-server

WORKDIR /srv/shiny-server

RUN bash -c "if ! [[ -d $APP_NAME ]]; \
    then mkdir $APP_NAME && \
    cp -r .Rprofile $APP_NAME/ && \
    cp -r renv* $APP_NAME/; \
    fi \
"

WORKDIR /srv/shiny-server/$APP_NAME

## COPY app files from previous build to /srv/shiny-server/<app-name>
#COPY --from=previous /srv/shiny-server/$APP_NAME /srv/shiny-server/$APP_NAME
#COPY --from=previous /srv/shiny-server/$APP_NAME/app.R /srv/shiny-server/$APP_NAME/app.R
#COPY --from=previous /srv/shiny-server/$APP_NAME/data /srv/shiny-server/$APP_NAME/data/
#COPY --from=previous /srv/shiny-server/$APP_NAME/modules /srv/shiny-server/$APP_NAME/modules/
COPY --from=previous /srv/shiny-server/$APP_NAME/renv /srv/shiny-server/$APP_NAME/renv/
COPY --from=previous /srv/shiny-server/$APP_NAME/templates /srv/shiny-server/$APP_NAME/templates/
COPY --from=previous /srv/shiny-server/$APP_NAME/www /srv/shiny-server/$APP_NAME/www/

RUN echo $(ls -lA)

COPY data ./data/

#COPY .Renviron .Renviron
COPY renv.lock renv.lock
COPY renv/activate.R renv/activate.R
COPY renv/settings.dcf renv/settings.dcf

COPY .exec-shiny-app.R .exec-shiny-app.R.bak
## Fix incorrect (windows) line-ending that keep this script from running on linux
RUN bash -c "sed $'s/\r$//' .exec-shiny-app.R.bak > .exec-shiny-app.R && \
    chmod +x .exec-shiny-app.R; \
"

COPY app.R app.R
COPY modules modules/
COPY templates templates/
COPY www www/
COPY README.md README.md

RUN chmod -R ga+rw /srv/shiny-server/$APP_NAME
RUN chmod +x /srv/shiny-server/$APP_NAME/.exec-shiny-app.R

# Remove the local environment vars from this build
RUN bash -c "if [[ -e .env.local ]]; \
    then mv .env.local .env.local.bak; \
    fi \
"
#CMD /usr/bin/bash
#CMD /usr/bin/shiny-server
CMD /srv/shiny-server/$APP_NAME/.exec-shiny-app.R

#ENTRYPOINT [ "/usr/local/bin/Rscript" ]

EXPOSE 3000
EXPOSE 3838
EXPOSE 5174
