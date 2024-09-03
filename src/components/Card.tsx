import { useState } from 'react';
import { FaUser } from 'react-icons/fa';
import Modal from './Modal';
import PorqueVotar from './PorqueVotar';

export default function Card(props: Candidato) {
    const [modalAberto, setModalAberto] = useState(false);

    const abrirModal = () => setModalAberto(true);
    const fecharModal = () => setModalAberto(false);

    return (
        <div className="relative text-center bg-white rounded-md">
            <button onClick={abrirModal} className="w-full h-full">
                <div className="flex max-lg:flex-col items-center justify-evenly gap-10 p-4">
                    <div className="p-7 bg-gray-500 rounded-full">
                        <FaUser className="w-10 h-10" />
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="font-bold text-lg">{props.nome}</div>
                        <div>{props.numero}</div>
                    </div>
                </div>
                <div className="p-2">{props.propostas}</div>
            </button>

            <Modal abrirModal={modalAberto} fecharModal={fecharModal}>
                <div className="flex flex-col justify-center items-center gap-3 mb-4 -m-5">
                    <div className="w-20 h-20 bg-black rounded-full" />
                    <p className="text-xl font-semibold">{props.nome}</p>
                    <p>Número do partido: {props.numero}</p>
                    <p>{props.biografia}</p>
                    <div className='text-justify px-6'>
                        {props.propostas.map((proposta, index) => (
                            <div key={index}>{index+1}º - Proposta {proposta}</div>
                        ))}
                    </div>
                </div>
                <PorqueVotar>
                    <button
                        onClick={fecharModal}
                        className="mt-4 bg-red-500 text-white px-14 py-2 rounded-md hover:bg-red-600">
                        Fechar
                    </button>
                </PorqueVotar>
            </Modal>
        </div>
    );
}
