import { CandidatosContextProvider } from "@/hooks/contexts/CandidatosContext";
import InputContextProvider from "@/hooks/contexts/InputContext";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "."
import { Admin } from "./admin";

const router = {
    [
        "home": Home
    ]
}

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
