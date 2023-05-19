import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <title>My Portfolio</title>
        <meta name="description" content="Mariano Villaescusa Portfolio Website"/>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>

      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
