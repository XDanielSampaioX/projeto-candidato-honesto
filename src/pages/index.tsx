import Image from "next/image";
import { Inter } from "next/font/google";
import _ from "@/components/_";
import { ContextCandidatosProvider } from "@/contexts/ContextCandidados";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <ContextCandidatosProvider>
        <h1>Bora meu Prefeito</h1>
        <_></_>
      </ContextCandidatosProvider>
    </>
  );
}
