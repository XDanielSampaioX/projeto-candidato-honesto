import { FaTrash, FaPen } from "react-icons/fa";


export default function Tbody(props: Candidato) {
  return (
    <tbody className="flex flex-col space-y-4">
      <tr>
        <td className="w-1/4 font-semibold">{props.nome}</td>
        <td className="w-1/4 text-center">{props.numero}</td>
        <td className="w-2/4">{props.biografia}</td>
        <td>
          <div className="flex h-9 gap-1">
            <button className="bg-teal-800 p-2 rounded-lg"><FaPen /></button>
            <button className="bg-red-700 p-2 rounded-lg"><FaTrash /></button>
          </div>
        </td>
      </tr>
    </tbody>
  );
}
