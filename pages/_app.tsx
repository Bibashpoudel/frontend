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
        {/* <Script
        id="google-tag-manager"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer',${process.env.GOOGLE_TAG});`,
        }}
      ></Script>
      <noscript
        dangerouslySetInnerHTML={{
          __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=${process.env.GOOGLE_TAG}"
            height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
        }}
      ></noscript> */}

        <Component {...pageProps} />
      </StoreProvider>
    </>
  );
}
