import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* SEO Meta Tags for Home Page */}
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Site Description */}
        <meta
          name="description"
          content="Hujjat24.uz - Yuqori sifatli mahsulotlar, kurs ishi, taqdimotlar va boshqa o'quv materiallarini toping."
        />

        {/* Keywords for SEO */}
        <meta
          name="keywords"
          content="Hujjat24, o'quv materiallari, kurs ishi, slaydlar, taqdimotlar, diplom ishlar"
        />

        {/* Default Author */}
        <meta name="author" content="Hujjat24.uz" />

        {/* Canonical URL for Home */}
        <link rel="canonical" href="https://hujjat24.uz/" />

        {/* Open Graph (Facebook) */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Hujjat24.uz | Yuqori sifatli mahsulotlar"
        />
        <meta
          property="og:description"
          content="Hujjat24.uz - Yuqori sifatli mahsulotlar, kurs ishi, taqdimotlar va boshqa o'quv materiallarini toping."
        />
        <meta property="og:image" content="/logo.png" />
        <meta property="og:url" content="https://hujjat24.uz" />
        <meta property="og:site_name" content="Hujjat24.uz" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Hujjat24.uz | Yuqori sifatli mahsulotlar"
        />
        <meta
          name="twitter:description"
          content="Hujjat24.uz - Yuqori sifatli mahsulotlar, kurs ishi, taqdimotlar va boshqa o'quv materiallarini toping."
        />
        <meta name="twitter:image" content="/logo.png" />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
