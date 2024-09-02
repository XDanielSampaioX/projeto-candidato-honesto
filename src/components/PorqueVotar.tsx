import { useState } from "react"

type PorqueVotarProps = {
    children: React.ReactNode
}

export default function PorqueVotar({children}: PorqueVotarProps) {

    const [sugestoes, setSugestoes] = useState("")

    const quandoMudar = (e: any) => {
        setSugestoes(e.target.value)
    }
    return (
        <>
            <form className="flex flex-col ">
                <label className="py-2" htmlFor="sugestoes">Sugestões</label>
                <input onChange={quandoMudar} value={sugestoes} className="shadow-md bg-gray-300 p-2 rounded-md h-10" type="text" id="sugestoes" />
                <div className="flex fle-col justify-between flex-row-reverse">
                    {children}
                    <button
                        className="mt-4 bg-blue-800 text-white px-14 py-2 rounded-md hover:bg-red-600">
                        Enviar
                    </button>
                </div>
            </form>
        </>
    )
};
