import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { CandidatosContextProvider } from "@/contexts/CandidatosContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <CandidatosContextProvider>
        <Component {...pageProps} />
      </CandidatosContextProvider>
    </>
  )
}
