import { FaEye } from 'react-icons/fa';

type CardProps = {
    nome: string;
    numero: number;
    propostas: string;
};

export default function Card(props: CardProps) {

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
                    <div>{props.nome}</div>
                    <div>{props.numero}</div>
                </div>
            </div>
            <div>
                {props.propostas}
            </div>
        </div>
    )
};
