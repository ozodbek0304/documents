import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Page Title */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Hujjat24 - Kurs ishlari, diplom ishlar, taqdimotlar, metodik qo'llanmalar, dissertatsiyalar, referatlar, testlar, laboratoriya ishlari va boshqa o'quv hujjatlarini toping va yuklab oling."
        />
        <meta
          name="keywords"
          content="Hujjat24, kurs ishlari, diplom ishlari, taqdimotlar, slaydlar, referatlar, mustaqil ishlar, dars ishlanmalari, metodik qo'llanmalar, ilmiy maqolalar, laboratoriya ishlari, testlar, dissertatsiyalar, statistika hisobotlari, tarjimalar, lug'atlar, shartnomalar, huquqiy hujjatlar"
        />
        <meta name="robots" content="index, follow" />
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
