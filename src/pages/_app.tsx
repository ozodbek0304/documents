import Providers from "@/providers/providers";
import "@/styles/globals.css";
import { SessionProvider } from "next-auth/react";
import NextNProgress from "nextjs-progressbar";

import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps.session}>
      <Providers>
        <NextNProgress
          color="transparent"
          startPosition={0.3}
          stopDelayMs={100}
          height={4}
          options={{ easing: "ease", speed: 500 }}
        />
        <Component {...pageProps} />
      </Providers>
    </SessionProvider>
  );
}
