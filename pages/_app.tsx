import "../styles/globals.css";
import type { AppProps } from "next/app";

import StoreProvider from "../utils/store";
import Script from "next/script";
import { useRouter } from "next/router";
import { useEffect } from "react";

import * as gtag from "../utils/gtab";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: any) => {
      gtag.pageview(url);
    };

    router.events.on("routeChangeComplete", handleRouteChange);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);
  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTIC}`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', "${process.env.NEXT_PUBLIC_GOOGLE_ANALYTIC}", {
            page_path: window.location.pathname,
          });
        `,
        }}
      />
      <StoreProvider>
        <Component {...pageProps} />
      </StoreProvider>
    </>
  );
}
