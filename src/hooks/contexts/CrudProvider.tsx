import axios from "axios";
import React, {createContext, useContext, useEffect, useState} from "react";

type CrudProviderProps = {
    children: React.ReactNode
};

type CrudContextTypes = {
    cardCandidato: Candidatos[]
    getCandidatos: () => Promise<void>;
    postCandidato: (payload: Candidato) => Promise<void>;
};

const CrudContext = createContext({} as CrudContextTypes);

const CrudProvider = ({ children }: CrudProviderProps) => {

    // * GET
                                    // O TIPO DE post E setPosts SÃO OS MESMOS DE POSTS
    const [cardCandidato, setCardCandidato] = useState<Candidatos[]>([])

    const getCandidatos = async () => {

        
        try {
            
            // armazenar a resposta da API
            const response = await axios.get<Candidatos[]>(`/api/candidatos`);
            
            
            // armazenar apenas os dados retornados pela resposta
            const data = response.data
            
            // só pra ver se tá tudo certo
            console.log(data)

            // atualizar os posts salvos nos dados
            // hook do react
            setCardCandidato(data)

            // tratamento de erro
        } catch (error) {
            console.log(error);
        };
    };

    // hook do react
    // o useEffect executa quando detecta algum tipo de mudança
    useEffect( () => {
        console.log("carregando")
        getCandidatos();

    }, []);
    // array vazio -> useEffect só executa uma vez, no LOADING DA PÁG
    // no loading da pag -> executa essa função para receber o JSON


    // * POST
    const postCandidato = async (payload: Candidatos) => {
        // // mock api time 100ms
        // await new Promise((resolve) => setTimeout(resolve, 100));
        await axios.post(`/api/candidatos`, payload);

        getCandidatos()
    };

    // * DELETE
    const deletePosts = async (id: Candidato) => {
        axios.delete(`/api/candidatos`)
        
        getCandidatos()
    }

    
    const value: CrudContextTypes = {

        cardCandidato,
        getCandidatos,
        postCandidato


    };

    return (
        <CrudContext.Provider value={value}>
            {children} 
        </CrudContext.Provider>
    )
};

const useCrud = () => {
    const context = useContext(CrudContext);

    if (!context) {
        throw new Error("useCrud must be used within a CrudProvider");
    }

    return context;
};

export { useCrud, CrudProvider };