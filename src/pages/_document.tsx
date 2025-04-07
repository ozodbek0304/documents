import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Page Title */}
        <meta
          name="description"
          content=" Yuqori sifatli mahsulotlar, kurs ishi, taqdimotlar va boshqa o'quv materiallarini toping."
        />
        <meta
          name="keywords"
          content="Hujjat24, o'quv materiallari, kurs ishi, slaydlar, taqdimotlar, diplom ishlar"
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/logo.png" />
        <meta property="og:url" content="https://hujjat24.uz" />

        {/* Google Analytics Script */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-6Q3DJ59XPS"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-6Q3DJ59XPS');
        `}
        </Script>
      </Head>

      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
