# Amplify / React Frontend Minimal Application

This is a base template for creating React-oriented frontend
applications with an optional Plumber/Shiny backend. Both the frontend
and backend will be deployed and hosted on [AWS
Amplify](https://docs.amplify.aws/cli/usage/containers/).

## Configuration

Assuming that you are using
[cdk-amplify-frontend](https://github.com/ruralinnovation/cdk-amplify-frontend)
as a template (via the “Use this template” button in Github) for a new
application, clone the resulting repo to your local environment. The
first file you should update is `package.json`. Change the value of the
“name” property to reflect your project name and then run `npm install`
to install dependencies.

For local development, copy the `.env` file to a file called
`.env.development.local`. Update the value for the environment variables
in `.env.development.local` as needed (for instance, change
`VITE_AMP_BACKEND_API=https://frontend.ruralopportunitymap.us` to
`VITE_AMP_BACKEND_API=http://127.0.0.1:5174` in order for the local
development frontend to connect to the local backend server).

If you plan on developing/deploying an `R` backend that utilizes Plumber
and/or Shiny, in the `R` console run `renv::restore(project = "src")`
(you may have to install the `renv` package in `R` before doing this, by
running `install.packages('renv')`).

*NOTE*: *If you plan on using `npm run build` to output a static version
of the frontend to the `dist` folder, those files will also be copied
into the `src/www` folder, which is where `R` sources the frontend files
for both the Shiny server and the Dockerfile build process. So, if you
have set special values in `.env.development.local` they will get copied
into the static frontend build, and subsequently into the Docker build,
so… beware of this.*

## Running Code

Run `npm run dev` to run the frontend React dev server.

      
        VITE v3.0.5  ready in 3189 ms

      ➜  Local:   http://localhost:5173/
      ➜  Network: use --host to expose
      

Run `npm run start` to call RScript and start the Plumber/Shiny server.

      
      [1] "Launching Shiny app (http://127.0.0.1:13743) in future worker cluster..."
      Running plumber API at http://0.0.0.0:5174
      Running swagger Docs at http://127.0.0.1:5174/__docs__/
      

*NOTE*: *This readme was generated from `README.Rmd` by R*:

    ## R version:

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
