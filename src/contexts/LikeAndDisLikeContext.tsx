import supabase from "@/config/supabaseClient";
import { createContext, useState } from "react";

type LikeAndDisLikeContextType = {
    like: number;
    disLike: number;
    patchLike: (candidato: Candidato) => Promise<void>;
    patchDisLike: (candidato: Candidato) => Promise<void>;
};

type LikeAndDisLikeContextProps = {
    children: React.ReactNode;
};

const initialValue = {
    like: 0,
    disLike: 0,
    patchLike: async () => { },
    patchDisLike: async () => { },
};

const LikeAndDisLikeContext = createContext<LikeAndDisLikeContextType>(initialValue);

export const LikeAndDisLikeContextProvider = ({ children }: LikeAndDisLikeContextProps) => {
    const [like, setLike] = useState<number>(0);
    const [disLike, setDisLike] = useState<number>(0);


    const fetchCandidato = async (id : number | undefined) => {
        try {
            const { data, error } = await supabase
            .from('candidatos')
            .select()
            if (error) {
                console.log("Erro ao buscar Candidato:", error);
            } else {
                const candidato = data.find((candidato) => candidato.id === id);
                if (candidato) {
                    setLike(candidato.like || 0);
                    setDisLike(candidato.disLike || 0);
                }
            }
        } catch (error) {
            console.log("Erro ao buscar Candidato:", error);
        }
    };
    const patchLike = async (candidato: Candidato) => {
        try {
            const {data, error} = await supabase
            .from('candidatos')
            .update({ like: (candidato.like || like) + 1 })
            .eq('id', candidato.id)
            .select();
    
            if (error) {
                console.log("Erro ao atualizar like:", error);
            } else {
                console.log("Like: ", data);
                fetchCandidato(candidato.id);
            }
        } catch (error) {
            console.log("Erro ao atualizar like:", error);
        }
    };
    const patchDisLike = async (candidato: Candidato) => {
        try {
            const {data, error} = await supabase
            .from('candidatos')
            .update({ disLike: (candidato.disLike || disLike) + 1 })
            .eq('id', candidato.id)
            .select();
    
            if (error) {
                console.log("Erro ao atualizar like:", error);
            } else {
                console.log("DisLike: ", data);
                fetchCandidato(candidato.id);
            }
        } catch (error) {
            console.log("Erro ao atualizar like:", error);
        }
    };

    return (
        <LikeAndDisLikeContext.Provider value={{ like, disLike, patchLike, patchDisLike }}>
            {children}
        </LikeAndDisLikeContext.Provider>
    );
};

export default LikeAndDisLikeContext;
