import Menu from "@/components/Menu";
import Tbody from "@/components/Tbody";
import CandidatosContext from "@/hooks/contexts/CandidatosContext";
import { useContext } from "react";

export default function Admin() {
  const { candidatos } = useContext(CandidatosContext);

  return (
    <>
      <Menu />
      <div className="flex flex-col items-center space-y-6 bg-gray-900 min-h-screen py-3">
        <h1 className="text-3xl text-white font-bold">
          Administração de Candidatos
        </h1>
        <div className=" w-3/4 flex justify-end">
          <div className="outline outline-4 outline-white w-14 h-6 bg-white rounded-sm flex justify-center items-center">
            <button className="text-gray-800 font-bold text-3xl"> + </button>
          </div>
        </div>
        <table className="w-3/4 bg-gray-800 text-white rounded-lg shadow-lg">
          <thead>
            <tr className="flex justify-around bg-gray-700 p-4 rounded-t-lg">
              <th className=" font-semibold text-left">Nome</th>
              <th className=" font-semibold text-center">Número</th>
              <th className=" font-semibold text-center">Propostas</th>
            </tr>
          </thead>
          <Tbody candidato={candidatos} />
        </table>
      </div>
    </>
  );
}
