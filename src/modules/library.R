# This file contains all of the required R packages for this app
if (all(c(
  require(htmltools),
  require(markdown),
  require(shiny),
  require(shinydashboard),
  require(shinyjs),
  require(shinylogs),
  require(shinythemes),
  require(shinyWidgets),
  require(tidyverse)

)) != TRUE) {
# if (is.na(loaded) || loaded != TRUE) {
    stop("ERROR: Host env is missing required library packages.")
}
