import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang='en'>
        <Head>
          <meta httpEquiv='content-type' content='text/html;charset=UTF-8' />
          <meta httpEquiv='X-UA-Compatible' content='IE=edge,chrome=1' />
          <meta
            name='viewport'
            content='width=device-width, initial-scale=1.0, maximum-scale=1.0'
          />
          <link
            href='https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,400;0,700;1,400&display=swap'
            rel='stylesheet'
          ></link>
          <title>Port Services</title>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
