import { FaSearch } from "react-icons/fa";

export default function Menu() {
    return (
        <div className="bg-blue-950 rounded-md flex gap-10 p-2 m-5 justify-around items-center">
            <div className="flex items-center gap-10">
                <div className="w-14 h-14 rounded-full bg-white"/>
                <div className="text-white font-semibold">
                    <ul className="flex gap-10">
                        <li>Home</li>
                        <li>Sobre</li>
                    </ul>
                </div>
            </div>
            <div className="text-white font-semibold relative">
                <label className="max-md:hidden" htmlFor="inputCandidato">Buscar Candidato:</label>
                <input className="rounded-sm m-3 bg-gray-500" type="text" id="inputCandidato" placeholder="Procurar registro..." />
            <FaSearch className="absolute top-4 right-5"/>
            </div>
        </div>
    )
};
