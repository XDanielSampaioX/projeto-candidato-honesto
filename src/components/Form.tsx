import { useState } from "react";
import Modal from "./Modal";

const Form = () => {

    const [modalAberto, setModalAberto] = useState(false);

    const abrirModal = () => setModalAberto(true);
    const fecharModal = () => setModalAberto(false);

    return (
        <Modal abrirModal={modalAberto} fecharModal={fecharModal}>
            <form className="max-w-sm mx-auto">

                <div className="mb-5">
                    <label htmlFor="nome-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nome do candidato</label>
                    <input type="text" id="nome-input" className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    </input>
                </div>

                <div className="mb-5">
                    <label htmlFor="numero-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Numero do candidato</label>
                    <input type="text" id="numero-input" className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    </input>
                </div>

                <div className="mb-5">
                    <label htmlFor="proposta1-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Proposta 1</label>
                    <input type="text" id="proposta1-input" className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    </input>
                </div>

                <div className="mb-5">
                    <label htmlFor="proposta2-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Proposta 2</label>
                    <input type="text" id="proposta2-input" className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    </input>
                </div>

                <div className="mb-5">
                    <label htmlFor="proposta3-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Proposta 3</label>
                    <input type="text" id="proposta3-input" className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    </input>
                </div>

                <div className="mb-5">
                    <label htmlFor="large-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Biografia</label>
                    <input type="text" id="large-input" className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    </input>
            </div>
            </form>


        </Modal>
    )
}

export default Form