import { Children, createContext, use, useState } from "react";

type ContextCandidatosProps = {
    children : React.ReactNode
}

type ContextCandidatosType = {
    nome: string;
    setNome: (newState: string) => void;
    numero: number,
    setNumero: (newState: number) => void,
    biografia: string,
    setBiografia: (newState: string) => void,
    propostas: string[],
    setPropostas: (newState: string[]) => void,
}

const InitialValue = {
    nome: '',
    setNome: () => { },
    numero: 0,
    setNumero: () => { },
    biografia: '',
    setBiografia: () => { },
    propostas: [],
    setPropostas: () => { },
}

export const ContextCandidatos = createContext<ContextCandidatosType>(InitialValue);

export const ContextCandidatosProvider = ({children} : ContextCandidatosProps) => {
    const [nome, setNome] = useState('')
    const [numero, setNumero] = useState(0)
    const [biografia, setBiografia] = useState('')
    const [propostas, setPropostas] = useState<string[]>([])

    return (
        <ContextCandidatos.Provider value=
            {
                { nome, setNome, numero, setNumero, biografia, setBiografia, propostas, setPropostas }
            }
        >{children}</ContextCandidatos.Provider>
    )
}

