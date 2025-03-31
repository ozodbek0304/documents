import Providers from "@/providers/providers";
import "@/styles/globals.css";
import { SessionProvider } from "next-auth/react";

import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps.session}>
      <Providers>
        <Component {...pageProps} />
      </Providers>
    </SessionProvider>
  );
}
