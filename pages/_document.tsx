import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <title>Cervejaria 2 | Cerveja artesanal de Dois Córregos.</title>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=Delius&family=Teko:wght@300..700&display=swap" rel="stylesheet" />
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
