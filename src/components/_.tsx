import { ContextCandidatos } from "@/contexts/ContextCandidados"
import { useContext } from "react"

export default function Candidatos() {
    const { nome, setNome, numero, setNumero, biografia, setBiografia, propostas, setPropostas } = useContext(ContextCandidatos)

    return (
        <>
            <h1>nome: {nome}</h1>
            <button className="bg-yellow-500" onClick={() => setNome("Daniel")}> Muda</button>
            <h1>{numero}</h1>
            <button className="bg-yellow-500" onClick={() => setNumero(11111)}> Muda</button>
            <h1>{biografia}</h1>
            <button className="bg-yellow-500" onClick={() => setBiografia("Sou o cara")}> Muda</button>
            <h1>{propostas}</h1>
            <button className="bg-yellow-500" onClick={() => setPropostas(["sai fora", "não perdi"])}> Muda</button>
        </>
    )
};
