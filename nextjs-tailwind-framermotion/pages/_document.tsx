import React from "react";
import Document, { Html, Head, Main, NextScript, DocumentContext } from "next/document";

type typesDocument = {
  html: string;
  head?: JSX.Element[];
  // styles?: {};
};
class newDocument extends Document {
  static async getInitialProps(ctx: DocumentContext): Promise<typesDocument> {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render(): JSX.Element {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default newDocument;
