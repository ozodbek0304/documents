import Providers from "@/providers/providers";
import "@/styles/globals.css";
import { SessionProvider } from "next-auth/react";
import NextNProgress from "nextjs-progressbar";
import type { AppProps } from "next/app";
import { useGet } from "@/hooks/useGet";
import { generateAuthKey } from "@/components/header";
import { GET_VIEW } from "@/lib/api-endpoints";
import { useEffect } from "react";

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const fetchData = async () => {
      try {
        await useGet(GET_VIEW, {
          config: {
            headers: {
              Auth: generateAuthKey(),
            },
          },
        });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

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
