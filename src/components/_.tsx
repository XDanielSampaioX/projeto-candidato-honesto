import CandidatosContext from '../contexts/CandidatosContext';
import { useContext } from "react";

export default function Candidatos() {
    const { candidatos } = useContext(CandidatosContext);
    
    return (
        <div>
            <h1>Lista de Candidatos</h1>
            <ul>
                {candidatos.map((candidato, index) => (
                    <li key={index}>
                        <h2>{candidato.nome}</h2>
                        <p>Número: {candidato.numero}</p>
                        <p>Biografia: {candidato.biografia}</p>
                        <p>Propostas: {candidato.propostas.join(', ')}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};
