import { Search } from "@/assets/Search";
import { InputContext } from "@/hooks/contexts/InputContext";
import { useContext } from "react";

export default function Menu() {

    const {termoDeBusca, setTermoDeBusca} = useContext(InputContext);

    const quandoMudar = (e:any) => {
        setTermoDeBusca(e.target.value);
    };

    return (
        <div className="flex justify-around items-center fundoMenu rounded-md gap-10 p-2 m-3 ">
            <div className="flex items-center gap-10">
                <div className="w-14 h-14 rounded-full bg-white" />
                <div className="text-white font-semibold">
                    <ul className="flex gap-10">
                        <li>Home</li>
                        <li>Sobre</li>
                    </ul>
                </div>
            </div>
            <div className="text-white font-semibold relative">
                <label className="max-md:hidden" htmlFor="inputCandidato">Buscar Candidato:</label>
                <input className="rounded-sm m-3 px-2 text-black" type="text"
                    id="inputCandidato" placeholder="Procurar registro..."
                    value={termoDeBusca} onChange={quandoMudar} />
                <Search className="absolute top-3.5 right-5 textAzul" />
            </div>
        </div>
    )
};
