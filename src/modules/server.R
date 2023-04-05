server <- function (input, output, session) {

    if (!dir.exists(LOG_FILE)) {
        dir.create(LOG_FILE)
    }

    # Observe repeat wake time
    observeEvent(input$wake, {
        print(paste0("Client sent input$wake: ", isolate(input$wake)))

        # Optionally send message back to frontend
        session$sendCustomMessage("woken",
          list(type ="woken", value = isolate(input$wake))
        )
        return(isolate(input$wake))
    })

    track_usage(storage_mode = store_json(path = LOG_FILE))
}
