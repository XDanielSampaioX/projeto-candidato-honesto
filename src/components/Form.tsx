import { useState } from "react";
import * as yup from "yup";
import { useCrud } from "@/hooks/contexts/CrudProvider";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';

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
}).required();

type FormData = {
  nome: string;
  numero: string;
  biografia: string;
  propostas?: string[];
}


const FormCandidato = () => {
    const [show, setShow] = useState(false);
    const { postCandidato } = useCrud();

    const {
        handleSubmit,
        register,
        formState: { errors },
        reset,
    } = useForm<FormData>({
        resolver: yupResolver(schema),
    });

    const fecharForms = () => {
        setShow(false);
    }

    const abrirForms = () => {
        setShow(true);
    }

    const onClick = async (formData: FormData) => {
        const novoCandidato: FormData = {
            nome: formData.nome,
            numero: formData.numero,
            biografia: formData.biografia,
            propostas: formData.propostas
        };

        await postCandidato(novoCandidato);
        fecharForms();
        reset();
    };

    return (
        <>
            <button onClick={abrirForms} className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button"> 
                Cadastrar Candidato
            </button>

            {show && (
                <>
                    {/* Overlay para escurecer o fundo */}
                    <div className="fixed inset-0 bg-black bg-opacity-50 transition-opacity ease-in-out duration-500"></div>

                    {/* Modal */}
                    <div id="formsmodal" className="fixed inset-0 flex items-center justify-center z-50">
                        <div id="formsmodal" className="relative bg-white rounded-lg shadow dark:bg-gray-700 transform transition-all ease-in-out duration-700 scale-100 opacity-100">
                            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                                    Cadastrar Candidato
                                </h3>
                                <button onClick={fecharForms} className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white">
                                    <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                                    </svg>
                                    <span className="sr-only">Close modal</span>
                                </button>
                            </div>
                            <div className="p-4 md:p-5">
                                <form onSubmit={handleSubmit(onClick)} className="space-y-4" action="#">
                                    <div>
                                        <label htmlFor="nome" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nome</label>
                                        <input
                                        {...register("nome")} 
                                        type="text" 
                                        name="nome" 
                                        id="nome"
                                        className={
                                            errors?.nome?.message
                                            ? "form-control is-invalid"
                                            : "form-control bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                        }
                                        placeholder="Insira o nome do candidato(a)" 
                                        required 
                                        />
                                        {errors?.nome?.message ? (
                                            <div className="invalid-feedback">
                                            {errors.nome.message}
                                            </div>
                                        ) : (
                                            <div id="nomeHelp" className="form-text">
                                            </div>
                                        )}
                                    </div>
                                    {/* Adicionar outros campos do formulário aqui */}
                                    <div>
                                        <label htmlFor="numero" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">numero</label>
                                        <input
                                        {...register("numero")} 
                                        type="text" 
                                        name="numero" 
                                        id="numero"
                                        className={
                                            errors?.numero?.message
                                            ? "form-control is-invalid"
                                            : "form-control bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                        }
                                        placeholder="Insira o numero do candidato(a)" 
                                        required 
                                        />
                                        {errors?.numero?.message ? (
                                            <div className="invalid-feedback">
                                            {errors.numero.message}
                                            </div>
                                        ) : (
                                            <div id="numeroHelp" className="form-text">
                                            </div>
                                        )}
                                    </div>

                                    <div>
                                        <label htmlFor="biografia" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">biografia</label>
                                        <input
                                        {...register("biografia")} 
                                        type="text" 
                                        name="biografia" 
                                        id="biografia"
                                        className={
                                            errors?.biografia?.message
                                            ? "form-control is-invalid"
                                            : "form-control bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                        }
                                        placeholder="Insira o biografia do candidato(a)" 
                                        required 
                                        />
                                        {errors?.biografia?.message ? (
                                            <div className="invalid-feedback">
                                            {errors.biografia.message}
                                            </div>
                                        ) : (
                                            <div id="biografiaHelp" className="form-text">
                                            </div>
                                        )}
                                    </div>

                                    <div>
                                        <label htmlFor="propostas" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">propostas</label>
                                        <input
                                        {...register("propostas")} 
                                        type="text" 
                                        name="propostas" 
                                        id="propostas"
                                        className={
                                            errors?.propostas?.message
                                            ? "form-control is-invalid"
                                            : "form-control bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                        }
                                        placeholder="Insira o propostas do candidato(a)" 
                                        required 
                                        />
                                        {errors?.propostas?.message ? (
                                            <div className="invalid-feedback">
                                            {errors.propostas.message}
                                            </div>
                                        ) : (
                                            <div id="propostasHelp" className="form-text">
                                            </div>
                                        )}
                                    </div>


                                    <button type="submit" className="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                        + Adicionar Candidato
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </>
    );
};

export default FormCandidato;
