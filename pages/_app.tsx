import "../styles/globals.css";
import type { AppProps } from "next/app";

import StoreProvider from "../utils/store";
import Script from "next/script";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <StoreProvider>
      <Component {...pageProps} />
    </StoreProvider>
  );
}
