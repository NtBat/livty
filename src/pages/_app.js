import Head from "next/head";
import SimpleReactLightbox from "simple-react-lightbox";
import "react-modal-video/scss/modal-video.scss";

import GlobalStyle from "../styles/globals";
import { ThemeProvider } from "styled-components";
import theme from "@/styles/theme";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <SimpleReactLightbox>
        <Head>
          <title>Livty</title>
        </Head>
        <GlobalStyle />
        <Component {...pageProps} />
      </SimpleReactLightbox>
    </ThemeProvider>
  );
}

export default MyApp;
