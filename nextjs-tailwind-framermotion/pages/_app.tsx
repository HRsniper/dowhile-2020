import React from "react";
import { AppProps } from "next/app";
import { AnimateSharedLayout } from "framer-motion";
import "../styles/tailwind.css";
import "../styles/globals.css";

import Layout from "../src/components/Layout";

function Root({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <AnimateSharedLayout>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AnimateSharedLayout>
  );
}

export default Root;
