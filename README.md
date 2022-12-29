# Amplify / React Frontend Minimal Application

## Running Code

Copy the `.env` file to a file called `.env.development.local`. Update
the value for the environment variables in `.env.development.local` as
needed (i.e. change
`VITE_API_BACKEND=https://frontend.ruralopportunitymap.us` to
`VITE_API_BACKEND=http://127.0.0.1:5174` in order for the local
development frontend to connect to the local backend server).

*NOTE*: *If you plan on using `npm run build` to output a static version
of the frontend to the `dist` folder, those files will also be copied
over the `src/www` folder, which is where both the Shiny server and the
Dockerfile source the frontend files from. So, if you have set special
values in `.env.development.local` they will get copied into the static
frontend build, and subsequently into the Docker build, so… beware of
this.*

Run `npm install` to install dependencies.

Run `npm run dev` to run the frontend React dev server.

Run `npm run start` to call RScript and start the Plumber/Shiny server.

    ##                _                           
    ## platform       x86_64-pc-linux-gnu         
    ## arch           x86_64                      
    ## os             linux-gnu                   
    ## system         x86_64, linux-gnu           
    ## status                                     
    ## major          4                           
    ## minor          1.2                         
    ## year           2021                        
    ## month          11                          
    ## day            01                          
    ## svn rev        81115                       
    ## language       R                           
    ## version.string R version 4.1.2 (2021-11-01)
    ## nickname       Bird Hippie
