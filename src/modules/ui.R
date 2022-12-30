ui <- function () {
    htmlTemplate(
        "templates/index.html",
        about_doc = includeMarkdown("README.md")
    )
}
