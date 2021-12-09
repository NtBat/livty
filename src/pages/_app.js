import Head from "next/head";

import GlobalStyle from "../styles/globals";
import { ThemeProvider } from "styled-components";
import theme from "@/styles/theme";

import "react-image-lightbox/style.css";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>Livty</title>
      </Head>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
