import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Page Title */}
        <title>Hujjat24.uz - Yuqori sifatli mahsulotlar</title>
        <meta
          name="description"
          content=" Yuqori sifatli mahsulotlar, kurs ishi, taqdimotlar va boshqa o'quv materiallarini toping."
        />
        <meta
          name="keywords"
          content="Hujjat24, o'quv materiallari, kurs ishi, slaydlar, taqdimotlar, diplom ishlar"
        />

        {/* Open Graph Meta Tags */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Hujjat24.uz - Yuqori sifatli mahsulotlar"
        />
        <meta
          property="og:description"
          content="Yuqori sifatli mahsulotlar, kurs ishi, taqdimotlar va boshqa o'quv materiallarini toping."
        />
        <meta property="og:image" content="/logo.png" />
        <meta property="og:url" content="https://hujjat24.uz" />
        <meta property="og:site_name" content="hujjat24.uz" />
        <meta
          property="og:keywords"
          content="Yuqori sifatli mahsulotlar, kurs ishi, taqdimotlar va boshqa o'quv materiallarini toping."
        />

        {/* Twitter Meta Tags */}
        <meta property="twitter:image" content="/logo.png" />
        <meta property="twitter:type" content="website" />
        <meta
          property="twitter:title"
          content="Hujjat24.uz - Yuqori sifatli mahsulotlar"
        />
        <meta
          property="twitter:description"
          content="Yuqori sifatli mahsulotlar, kurs ishi, taqdimotlar va boshqa o'quv materiallarini toping."
        />
        <meta property="twitter:url" content="https://hujjat24.uz" />
        <meta property="twitter:site_name" content="hujjat24.uz" />
        <meta
          property="twitter:keywords"
          content="Yuqori sifatli mahsulotlar, kurs ishi, taqdimotlar va boshqa o'quv materiallarini toping."
        />
      </Head>

      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
