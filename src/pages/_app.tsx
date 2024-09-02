import { CandidatosContextProvider } from "@/hooks/contexts/CandidatosContext";
import { CrudProvider } from "@/hooks/contexts/CrudProvider";
import InputContextProvider from "@/hooks/contexts/InputContext";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
    <CrudProvider>
      <CandidatosContextProvider>
        <InputContextProvider>
          <Component {...pageProps} />
        </InputContextProvider>
      </CandidatosContextProvider>
    </CrudProvider>
    </>
  )
}
