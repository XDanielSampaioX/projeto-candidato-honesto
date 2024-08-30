import Card from "@/components/Card";
import Menu from "@/components/Menu";

import CandidatosContext from "@/hooks/contexts/CandidatosContext";
import { InputContext } from "@/hooks/contexts/InputContext";
import { useContext } from "react";

export default function Home() {

  const { candidatos } = useContext(CandidatosContext);
  const { termoDeBusca } = useContext(InputContext);

  const registosFiltrados = (
    candidatos.filter(candidato => (candidato.nome.toLowerCase()).includes(termoDeBusca.toLowerCase()) ||
    candidato.numero.toString().includes(termoDeBusca)
  )
    ).map((candidato, index) => (
      <Card key={index} nome={candidato.nome} numero={candidato.numero} propostas={candidato.propostas.join('\n ')} />
    ))
  

  const todosRegistros = (
    candidatos.map((candidato, index) => (
      <Card key={index} nome={candidato.nome} numero={candidato.numero} biografia={candidato.biografia} propostas={candidato.propostas.join('\n ')} />
    ))
  )

  return (
    <>
      <Menu />
      <div className="grid max-md:grid-cols-3 max-2xl:grid-cols-4 gap-5 mx-6">
        {termoDeBusca.length > 0 ?
          <>{ registosFiltrados }</> : <>{ todosRegistros }</>}
      </div>
    </>
  );
}
