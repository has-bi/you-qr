import Document, { Head, Html, Main, NextScript } from 'next/document';
import React, { ReactElement } from 'react';

export default class MyDocument extends Document {
  render(): ReactElement {
    return (
      <Html lang="en">
        <Head>
          <meta name="msapplication-TileColor" content="#ff8322" />
          <meta name="theme-color" content="#ff8322" />
          <link
            rel="preload"
            href="/fonts/spline-sans-v8-latin-700.woff"
            as="font"
            crossOrigin=""
          />
          <link rel="preconnect" href="https://cpemael.avenir-resa.fr/"></link>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
