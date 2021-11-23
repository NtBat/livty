import Document, { Head, Html, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }
  render() {
    return (
      <Html lang="pt-br">
        <Head>
          <link
            rel="preload"
            href="/fonts/Stolzl-Regular.eot"
            as="font"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="/fonts/Stolzl-Regular.svg"
            as="font"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="/fonts/Stolzl-Regular.ttf"
            as="font"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="/fonts/Stolzl-Regular.woff"
            as="font"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="/fonts/Stolzl-Regular.woff2"
            as="font"
            crossOrigin=""
          />

          <link rel="shortcut icon" href="favicon.ico" type="image/ico" />
          <meta name="description" content="Livty"></meta>
          <meta name="AdsBot-Google" content="noindex" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
