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
          

          {/* <!-- Modal toggle --> */}
          <button data-modal-target="authentication-modal" data-modal-toggle="authentication-modal" className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button"> Cadastrar Candidato
          </button>

          {/* <!-- Main modal --> */}
          <div id="authentication-modal" tabIndex={-1} aria-hidden="true" className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
              <div className="relative p-4 w-full max-w-md max-h-full">

                  {/* <!-- Modal content --> */}
                  <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">

                      {/* <!-- Modal header --> */}
                      <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                              Cadastrar Candidato
                          </h3>
                          <button type="button" className="end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="authentication-modal">
                              <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                              </svg>
                              <span className="sr-only">Close modal</span>
                          </button>
                      </div>
                      
                      {/* <!-- Modal body --> */}
                      <div className="p-4 md:p-5">
                          <form className="space-y-4" action="#">
                              <div>
                                  <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                  <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" required />
                              </div>
                              <div>
                                  <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                                  <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                              </div>
                              <button type="submit" className="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">+
                                <svg className="me-1 -ms-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd"></path></svg>
                                  Adicionar Candidato
                              </button>
                          </form>
                      </div>
                  </div>
              </div>
         </div> 

        </>
      )

}


