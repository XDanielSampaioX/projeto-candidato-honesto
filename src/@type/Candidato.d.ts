declare type Candidato = {
    id?: string;
    imagem?: { publicUrl: string; };
    nome: string;
    partido?: string;
    numero: string,
    biografia: string,
    propostas?: string,
    like?: string;
    disLike?: string;
}