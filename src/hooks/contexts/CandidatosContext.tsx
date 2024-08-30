import { createContext, useEffect, useState } from "react";
import axios from 'axios';

type ContextCandidatosProps = {
    children: React.ReactNode
}

type CandidatosContextType = {
    candidatos: Candidato [],
}

const initializeValue: CandidatosContextType = {
    candidatos: [],
};

const CandidatosContext = createContext<CandidatosContextType>(initializeValue);

export const CandidatosContextProvider = ({ children }: ContextCandidatosProps) => {
    const [candidatos, setCandidatos] = useState<Candidato[]>([])

    useEffect(() => {
        const fetchCandidatos = async () => {
            try {
                const response = await axios.get<Candidato[]>(`/api/candidatos`)
                setCandidatos(response.data)
            } catch (error) {
                console.log("erroror ao buscar os candidatos" + error);
            }
        };
        fetchCandidatos();
    },[]);

    return (
        <CandidatosContext.Provider value=
            {
                { candidatos }
            }
        >{children}</CandidatosContext.Provider>
    )
}

export default CandidatosContext;

