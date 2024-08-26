import { ContextCandidatosProvider } from "@/contexts/ContextCandidados";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="pt-br">
      <Head />
      <body>
        <ContextCandidatosProvider>
          <Main />
          <NextScript />
        </ContextCandidatosProvider>
      </body>
    </Html>
  );
}
