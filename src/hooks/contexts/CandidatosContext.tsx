import { createContext, useEffect, useState } from "react";
import axios from 'axios';

type CandidatosContextType = {
    candidatos: Candidato[],
    postCandidato: (newCandidatos: Candidato[]) => Promise<void>;
}

type CandidatosContextProps = {
    children: React.ReactNode
}

const initializeValue: CandidatosContextType = {
    candidatos: [],
    // inicializando a promise vazia
    postCandidato: async () => {},
};

const CandidatosContext = createContext<CandidatosContextType>(initializeValue);

export const CandidatosContextProvider = ({ children }: CandidatosContextProps) => {
    const [candidatos, setCandidatos] = useState<Candidato[]>([])

    // GET

    const fetchCandidatos = async () => {
        try {
            const response = await axios.get<Candidato[]>(`/api/candidatos`)
            setCandidatos(response.data)
        } catch (error) {
            console.log("erroror ao buscar os candidatos" + error);
        }
    };
    useEffect(() => {
        fetchCandidatos();
    }, []);

    
    // POST
    const postCandidato = async (payload: Candidato[]) => {
        try {
            await axios.post(`/api/candidatos`, payload)
            fetchCandidatos();
        } catch (error) {

            alert("Erro ao carregar o servidor")
        }
    }

    // PUT
    

    return (
        <CandidatosContext.Provider value=
            {
                { candidatos, postCandidato}
            }
        >{children}</CandidatosContext.Provider>
    )
}

export default CandidatosContext;

