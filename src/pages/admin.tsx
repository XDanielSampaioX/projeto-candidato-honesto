import FormCandidato from "@/components/FormCandidato";
import Menu from "@/components/Menu";
import Tbody from "@/components/Tbody";
import CandidatosContext from "@/hooks/contexts/CandidatosContext";
import { useContext } from "react";
import { InputContext } from "@/hooks/contexts/InputContext";

export default function Admin() {
  const { candidatos } = useContext(CandidatosContext);
  const { termoDeBusca } = useContext(InputContext);

  const registosFiltrados = (
    candidatos.filter(candidato => (candidato.nome.toLowerCase()).includes(termoDeBusca.toLowerCase()) ||
      candidato.numero.toString().includes(termoDeBusca)
    )
  ).map((candidato, index) => (
    <Tbody key={index} nome={candidato.nome} numero={candidato.numero} biografia={candidato.biografia} />
  ))


  const todosRegistros = (
    candidatos.map((candidato, index) => (
      <Tbody key={index} nome={candidato.nome} numero={candidato.numero} biografia={candidato.biografia} />
    ))
  )

  return (

    <>
      <header className="flex flex-col items-center max-w-screen">
        <Menu />
        < FormCandidato />
        <div className="flex flex-col items-center space-y-6 bg-gray-900 py-3">
          <h1 className="text-3xl text-white font-bold">Administração de Candidatos</h1>
          <table className="bg-gray-800 text-white rounded-lg shadow-lg w-full mx-auto">
            <thead className="flex justify-center">
              <tr className="flex text-center justify-between bg-gray-700 p-3 rounded-t-lg w-full">
                <th className="w-1/6">Nome</th>
                <th className="w-1/6">Número</th>
                <th className="w-1/4">Propostas</th>
                <th className="w-1/6">Ações</th>
              </tr>
            </thead>
              {termoDeBusca.length > 0 ?
                <>{registosFiltrados}</> : <>{todosRegistros}</>}
          </table>
        </div>
      </header>
    </>
  );
}