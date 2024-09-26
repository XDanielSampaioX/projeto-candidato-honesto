import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import { Search } from "../assets/Search";
import InputContext from "../contexts/InputContext";

export default function Menu() {

    const { termoDeBusca, setTermoDeBusca } = useContext(InputContext)

    const quandoMudar = (e: { target: { value: string; }; }) => {
        setTermoDeBusca(e.target.value);
    };

    return (
        <header className="flex justify-around items-center w-full m-auto bg-blue-900 gap-10 py-5 top-0 fixed z-50">
            <div className="flex items-center gap-14">
                <div className="w-12"> <Image src="/LOGO.png" width={50} height={50} alt="logo" /></div>
                <nav className="text-white font-semibold">
                    <ul className="flex gap-10">
                        <li>
                            <Link href="/">Home</Link>
                        </li>
                        <li>
                            <Link href="/Admin">Admin</Link>
                        </li>
                        <li>
                            <Link href="/Sobre">Sobre</Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className="text-white font-semibold relative">
                <label className="max-md:hidden" htmlFor="inputCandidato">Buscar Candidato:</label>
                <input className="rounded-md m-3 p-1 text-black max-lg:w-36 relative" type="text"
                    id="inputCandidato"
                    value={termoDeBusca} onChange={quandoMudar} />
                <Search className="absolute top-4 right-5 text-gray-500" />
            </div>
        </header>
    )
};
