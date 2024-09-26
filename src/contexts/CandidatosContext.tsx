import axios from 'axios';
import { createContext, useEffect, useState } from "react";

import supabase from "../config/supabaseClient";

type CandidatosContextType = {
    candidatos: Candidato[],
    postCandidato: (newCandidato: Candidato) => Promise<void>;
    putCandidato: (candidato: Candidato) => Promise<void>;
    deleteCandidato: (id: string | undefined) => Promise<void>
}

type CandidatosContextProps = {
    children: React.ReactNode;
}

const CandidatosContext = createContext<CandidatosContextType>(
    {
        candidatos: [],
        postCandidato: async () => { },
        putCandidato: async () => { },
        deleteCandidato: async () => { },
    }
);

export const CandidatosContextProvider = ({ children }: CandidatosContextProps) => {
    const [, setFetchError] = useState("");
    const [candidatos, setCandidatos] = useState<Candidato[]>([]);

    // GET
    const fetchCandidatos = async () => {

        const { data, error } = await supabase
            .from('candidatos')
            .select()

        if (error) {
            setFetchError("Requisição inválida");
            setCandidatos([])
            console.log(error)
        } if (data) {
            setCandidatos(data);
            console.log(data)
            setFetchError("")
        }
    };

    useEffect(() => {
        fetchCandidatos();
        console.log("Aqui")
    }, [])

    // POST
    // const postCandidato = async (candidato: Candidato) => {
    //     try {
    //         await axios.post(`http://localhost:3000/candidatos`, candidato);
    //         fetchCandidatos();
    //     } catch (error) {
    //         console.log("Erro ao adicionar candidato:", error);
    //     }
    // };
    const postCandidato = async (candidato: Candidato) => {
        try {
            const { data, error } = await supabase
                .from('candidatos')
                .insert(
                    { imagem: candidato.imagem, nome: candidato.nome, propostas : candidato.propostas }
                )
                .select()
                if (error) {
                    console.log("Error ao adicionar o candidateato:", error);
                } else {
                    console.log("Candidato adicionado com sucesso", data);
                    fetchCandidatos();
                }
        } catch (error) {
            console.log("Erro ao adicionar candidato:", error);
        }
    }


        // PUT
        const putCandidato = async (candidato: Candidato) => {

            try {
                await axios.put(`http://localhost:3000/candidatos/${candidato.id}`, candidato);
                console.log(candidato.id)
                fetchCandidatos();
            } catch (error) {
                console.log("Erro ao atualizar candidato:", error);
            }
        };

        // DELETE
        const deleteCandidato = async (id: string | undefined) => {
            const confirmDelete = window.confirm("Tem certeza que deseja ELIMINAR o candidato?");
            if (confirmDelete) {
                try {
                    await axios.delete(`http://localhost:3000/candidatos/${id}`);
                    fetchCandidatos();
                } catch (error) {
                    console.log("Erro ao deletar candidato:", error);
                }
            }
        };

        return (
            <CandidatosContext.Provider value={{ candidatos, postCandidato, putCandidato, deleteCandidato }}>
                {children}
            </CandidatosContext.Provider>
        );
    }

    export default CandidatosContext;