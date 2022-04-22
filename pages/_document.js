import { Html, Head, Main, NextScript } from "next/document";
export default function Document() {
  return (
    <Html>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@200;400;700&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <body className="bg-light-yellow">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
