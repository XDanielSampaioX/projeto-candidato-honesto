import { FaTrash, FaPen  } from "react-icons/fa";

type CandidatoTable = {
  nome: string;
  numero: number;
  propostas: string[];
  biografia: string;
};

type TbodyProps = {
  candidato: CandidatoTable[];
};

export default function Tbody({ candidato }: TbodyProps) {
  return (
    <tbody className="flex flex-col space-y-4">
      {candidato.map((candidato, index) => (
        <tr
          key={index}
          className="flex justify-between bg-gray-800 text-white p-4 rounded-lg shadow-md"
        >
          <td className="w-1/4 font-semibold">{candidato.nome}</td>
          <td className="w-1/4 text-center">{candidato.numero}</td>
          <td className="w-2/4">

            <div className="flex justify-end mb-4">
              <button className="bg-red-700  p-2 rounded-lg font-bold"><FaTrash /></button>
              <button className="bg-teal-800  p-2 rounded-lg font-bold ml-2"><FaPen /></button>
            </div>

            <ul className="list-disc list-inside space-y-2">
              {candidato.propostas.map((proposta, i) => (

                <li key={i}>{proposta}</li>
              ))}
            </ul>
          </td>
        </tr>
      ))}
    </tbody>
  );
}
