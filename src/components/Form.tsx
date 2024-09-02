import { useState } from "react";
import Modal from "./Modal";
import * as yup from "yup";
import CandidatosContext from "@/hooks/contexts/CandidatosContext";
import { useCrud } from "@/hooks/contexts/CrudProvider";
import { set, useForm } from "react-hook-form";



const [modalAberto, setModalAberto] = useState(false);

const abrirModal = () => setModalAberto(true);
const fecharModal = () => setModalAberto(false);

const schema = yup.object({
    nome: yup
    .string()
    .required("Campo obrigatório")
    .max(100),

    numero: yup
    .string()
    .required("Campo obrigatório")
    .max(5),

    biografia: yup
    .string()
    .required("Campo obrigatório")
    .max(1000),

    propostas: yup
    .array()
    .of(yup.string().required("Campo obrigatório").max(100)),
})

const FormCandidato = () => {
    const [show, setShow] = useState(false)
    const { postCandidato } = useCrud()

    const {
        handleSubmit,
        register,
        formState: { errors },
        reset,
      } = useForm<Candidatos>({
        // @ts-expect-error Erro de tipagem
        resolver: yupResolver(schema),
      });

      const fecharForms = () => {
        fecharModal()
        setShow(false)
      }
      const abrirForms = () => {
        abrirModal()
        setShow(true)
      }

      const onClick = async (formData: Candidatos) => {
        const novoCandidato: Candidatos = {
            nome: formData.nome,
            numero: formData.numero,
            biografia: formData.biografia,
            propostas: formData.propostas
        };

        await postCandidato(novoCandidato);
        fecharForms()
        reset();
      };

      return (
        <>
            <div>
                <button
                className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
                onClick={() => abrirForms()} >
                    Adicionar Candidato
                </button>
            </div>

            <Modal abrirModal={false} fecharModal={function (): void {
                  throw new Error("Function not implemented.");
              } } children={undefined}>

            </Modal>
        </>
      )

}


