import { CandidatosContextProvider } from "@/contexts/CandidatosContext";
import { InputContextProvider } from "@/contexts/InputContext";
import { LikeAndDisLikeContextProvider } from "@/contexts/LikeAndDisLikeContext";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <CandidatosContextProvider>
        <LikeAndDisLikeContextProvider>
          <InputContextProvider>
            <Component {...pageProps} />;
          </InputContextProvider>
        </LikeAndDisLikeContextProvider>
      </CandidatosContextProvider>
    </>
  )
}