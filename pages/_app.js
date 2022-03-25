import { useRouter } from "next/router";
import Head from "next/head";
import { lightTheme } from "data"
import { AnimatePresence } from "framer-motion";
import styled, { ThemeProvider } from "styled-components";
import { SoundBar } from "components"
import "styles/globals.css";

const Main = styled.main`
  & *::selection {
    color: #fff;
    background: #262626;
  }
`;

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <ThemeProvider theme={lightTheme}>
        <AnimatePresence exitBeforeEnter>
          <Main >
            <SoundBar />
            <Component {...pageProps} />
          </Main>
        </AnimatePresence>
      </ThemeProvider>
    </div>
  );
}

export default MyApp;
