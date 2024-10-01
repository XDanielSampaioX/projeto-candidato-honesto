import { useContext, useState } from "react";
import { FaPen, FaTrash } from "react-icons/fa";
import CandidatosContext from "../contexts/CandidatosContext";
import Input from "./Input";
import Modal from "./Modal";
import supabase from "@/config/supabaseClient";
import Image from "next/image";
import { memo } from "react";
import Photograph from "@/assets/Photograph";

export default memo(function Lista(props: Candidato) {
  const { putCandidato, deleteCandidato } = useContext(CandidatosContext);

  const [modalAberto, setModalAberto] = useState(false);

  // Armazenar a imagem selecionada no estado antes do envio
  const [imagemFile, setImagemFile] = useState<File | null>(null);

  // Estados para armazenar os valores dos campos
  const [formData, setFormData] = useState<Candidato>({
    imagem: props.imagem || "",
    id: props.id || 0,
    nome: props.nome || "",
    numero: props.numero || "",
    partido: props.partido || "",
    biografia: props.biografia || "",
    propostas: props.propostas || "",
  });

  // Função para tratar alterações no formulário
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, files } = e.target as HTMLInputElement;

    // Se o campo for de imagem, armazene o arquivo localmente
    if (name === "imagem") {
      const file = files && files[0];
      if (file) {
        setImagemFile(file);
      }
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  // Função para enviar o formulário e fazer o upload da imagem
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    let imageUrl = formData.imagem;

    // Se uma nova imagem foi selecionada, faça o upload
    if (imagemFile) {
      const { data, error } = await supabase.storage
        .from('imagens')
        .upload(`public/${imagemFile.name}`, imagemFile, {
          cacheControl: '3600',
          upsert: false,
        });

      if (error) {
        console.error('Erro ao enviar a imagem:', error);
        return;
      }

      // Obtenha a URL pública da nova imagem
      const { data: publicURL } = supabase.storage
        .from('imagens')
        .getPublicUrl(data.path);

      if (publicURL) {
        imageUrl = publicURL.publicUrl;
      }
    }
    // Atualize o banco de dados com a nova URL da imagem (ou mantenha a antiga)
    const updatedData = { ...formData, imagem: imageUrl };
    putCandidato(updatedData);
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
            <button onClick={() => deleteCandidato(props)} className="bg-red-700 p-2 rounded-lg">
              <FaTrash />
            </button>
          </span>
        </li>
      </ul>

      <Modal abrirModal={modalAberto} fecharModal={fecharModal}>
        <div className="bg-blue-900 text-black p-4 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Formulário de Edição</h2>
          <form onSubmit={handleSubmit} className="space-y-4 flex flex-col justify-center items-center">
            <div className="flex flex-col w-24">
              <label className=" flex justify-center items-center cursor-pointer bg-gray-200 p-2 rounded-full relative overflow-hidden" htmlFor="imagem_candidato">
                {props.imagem && <Image src={props.imagem} className="rounded-full" width={100} height={100} alt={"Imagem"} />}
                <div className="flex justify-center bg-gray-600 bg-opacity-70 absolute w-full bottom-0 ">
                  <Photograph />
                </div>
              </label>
              <input
                className="hidden"
                type="file"
                id="imagem_candidato"
                name="imagem"
                accept="image/*"
                onChange={handleChange}
              />
            </div>

            <div className="flex flex-col">
              <Input id="numero" name="numero" value={formData.numero} onChange={handleChange} />
            </div>

            <div className="flex flex-col">
              <Input id="partido" name="partido" value={formData.partido} onChange={handleChange} />
            </div>

            <div className="flex flex-col">
              <Input id="biografia" name="biografia" value={formData.biografia} onChange={handleChange} />
            </div>

            <div className="flex flex-col">
              <Input id="propostas" name="propostas" value={formData.propostas} onChange={handleChange} />
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
});
