/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_VERSION: string
  readonly VITE_AMP_BACKEND_API: string
  readonly VITE_CORI_DATA_API: string
  readonly VITE_GRAPHQL_LOCAL_API: string
  readonly VITE_USER_POOL_ID: string
  readonly VITE_USER_POOL_CLIENT_ID: string
  readonly VITE_IDENTITY_POOL_ID: string
  readonly VITE_REGION: string
  readonly VITE_COGNITO_DOMAIN: string
  readonly VITE_COGNITO_REDIRECT_SIGNIN: string
  readonly VITE_COGNITO_REDIRECT_SIGNOUT: string
  readonly VITE_MAPBOX_TOKEN: string
  
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
