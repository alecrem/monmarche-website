import NextDocument, { Html, Head, Main, NextScript } from 'next/document'

export default class Document extends NextDocument {
  render() {
    return (
      <Html>
        <Head title="mon Marché – ヨーロッパの古道具屋さんと自然派ワイン"></Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
