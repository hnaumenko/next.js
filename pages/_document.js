import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head testProp={'/orgadmin'} />
        <body>
          <Main />
          <NextScript testProp={'/orgadmin'} />
        </body>
      </Html>
    )
  }
}

export default MyDocument
