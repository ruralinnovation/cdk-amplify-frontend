import '@/styles/globals.css';
import "@aws-amplify/ui-react/styles.css";
import type { AppProps } from 'next/app';
import { withAuthenticator } from "@aws-amplify/ui-react";
import { Amplify } from "aws-amplify";

import config from '@/amplifyconfiguration.json';


// configure the Amplify client library with the configuration generated by `amplify sandbox`
Amplify.configure(config);

function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default withAuthenticator(App);
