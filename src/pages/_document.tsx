import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="pt-br">
      <Head />
      <body className="fundoPagina flex justify-center items-center">
          <Main />
          <NextScript />
      </body>
    </Html>
  );
}
