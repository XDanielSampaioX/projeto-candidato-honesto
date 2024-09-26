import { useContext, useState } from "react";
import { FaPen, FaTrash } from "react-icons/fa";
import CandidatosContext from "../contexts/CandidatosContext";
import Input from "./Input";
import Modal from "./Modal";

export default function Tbody(props: Candidato) {
  const { putCandidato, deleteCandidato } = useContext(CandidatosContext);

  const [modalAberto, setModalAberto] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Estados para armazenar os valores dos campos
  const [formData, setFormData] = useState<Candidato>({
    imagem: props.imagem || "",
    id: props.id || "",
    nome: props.nome || "",
    numero: props.numero || "",
    partido: props.partido || "",
    biografia: props.biografia || "",
    propostas: props.propostas || "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    putCandidato(formData);
    fecharModal();
  };

  const abrirModal = () => setModalAberto(true);
  const fecharModal = () => setModalAberto(false);


  return (
    <>
      <ul className="flex flex-col space-y-4 w-full">
        <li className="flex text-center justify-between p-3">
          <span className="w-1/12 font-semibold">{props.id}</span>
          <span className="w-1/6 font-semibold">{props.nome}</span>
          <span className="w-1/12 ">{props.numero}</span>
          <span className="w-1/4 ">{props.partido}</span>
          <span className="w-1/4 max-md:hidden">{props.propostas}</span>
          <span className="w-1/6 flex justify-center h-9 gap-1">
            <button onClick={abrirModal} className="bg-teal-800 p-2 rounded-lg">
              <FaPen />
            </button>
            <button onClick={() => deleteCandidato(props.id)} className="bg-red-700 p-2 rounded-lg">
              <FaTrash />
            </button>
          </span>
        </li>
      </ul>

      <Modal abrirModal={modalAberto} fecharModal={fecharModal}>
        <div className="bg-blue-900 text-black p-4 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Formulário de Cadastro</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex flex-col">
              <input type="file" id="imagem" name="imagem" accept={"image/*"} onChange={handleChange} ></input>
            </div>
            <div className="flex flex-col">
              <Input id="nome" name="nome" value={formData.nome} onChange={handleChange} ></Input>
            </div>
            <div className="flex flex-col">
              <Input id="numero" name="numero" value={formData.numero} onChange={handleChange}></Input>
            </div>
            <div className="flex flex-col">
              <Input id="partido" name="partido" value={formData.partido} onChange={handleChange}></Input>
            </div>
            <div className="flex flex-col">
              <Input id="biografia" name="biografia" value={formData.biografia} onChange={handleChange}></Input>
            </div>
            <div className="flex flex-col">
              <Input id="propostas" name="propostas" value={formData.propostas} onChange={handleChange}></Input>
            </div>
            <button
              type="submit"
              className="bg-green-600 text-white font-semibold rounded-lg p-2 hover:bg-green-700 transition"
            >
              Salvar
            </button>
          </form>
        </div>
      </Modal>
    </>
  );
}