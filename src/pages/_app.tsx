import { CandidatosContextProvider } from "@/hooks/contexts/CandidatosContext";
import InputContextProvider from "@/hooks/contexts/InputContext";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <CandidatosContextProvider>
        <InputContextProvider>
          <Component {...pageProps} />
        </InputContextProvider>
      </CandidatosContextProvider>
    </>
  )
}
