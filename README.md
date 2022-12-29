# Amplify / React Frontend Minimal Application

This is a base template for creating React-oriented frontend
applications with an optional Plumber/Shiny backend. Both the frontend
and backend will be deployed and hosted on [AWS
Amplify](https://docs.amplify.aws/cli/usage/containers/).

## Configuration

If you are using
[cdk-amplify-frontend](https://github.com/ruralinnovation/cdk-amplify-frontend)
as a template (via the “Use this template” button in Github), clone the
resulting repo to your local environment. The first file you should
update is `package.json`. Change the value of the “name” property to
reflect your project name and then run `npm install` to install
dependencies.

For local development, copy the `.env` file to a file called
`.env.development.local`. Update the value for the environment variables
in `.env.development.local` as needed (for instance, change
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

## Running Code

Run `npm run dev` to run the frontend React dev server.

Run `npm run start` to call RScript and start the Plumber/Shiny server.

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
