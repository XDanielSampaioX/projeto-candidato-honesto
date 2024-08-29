import { FaEye } from 'react-icons/fa';
import CandidatosContext from '../contexts/CandidatosContext';
import { useContext } from "react";

export default function Card() {
    return (
        <div className=
            {`
            relative
            text-center
            bg-white rounded-md
            `}>
            <button className='absolute items top-2 right-3'><FaEye/></button>
            <div className='flex items-center justify-evenly gap-10 p-5'>
                <div className='bg-black rounded-full w-24 h-24'></div>
                <div className='flex flex-col items-center'>
                    <div>Fulano de tal</div>
                    <div>numero fulano</div>
                </div>
            </div>
            <div>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam, reprehenderit facere. Neque  cum?
            </div>
        </div>
    )
};
