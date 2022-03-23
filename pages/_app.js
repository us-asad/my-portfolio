import Head from "next/head";
import { ThemeProvider } from "styled-components";
import { PowerButton } from "components";
import data from "data"
import "styles/globals.css";

function MyApp({ Component, pageProps }) {
  const { themes } = data;

  return (
    <div>
      <ThemeProvider theme={themes.lightTheme}>
        <main>
          <PowerButton />
          <Component {...pageProps} />
        </main>
      </ThemeProvider>
    </div>
  );
}

export default MyApp;
