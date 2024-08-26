// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Candidato = {
  nome: string;
  numero: number;
  biografia: string;
  propostas: string[];
};


const candidatos: Candidato[] = [
  {
      "nome": "Ana Silva",
      "numero": 1234,
      "biografia": "Ana Silva é uma professora e ativista social com mais de 20 anos de experiência na educação pública.",
      "propostas": [
          "Investir em educação básica de qualidade.",
          "Expandir o acesso a programas de alfabetização para adultos.",
          "Promover a formação contínua dos professores."
      ]
  },
  {
      "nome": "Carlos Pereira",
      "numero": 5678,
      "biografia": "Carlos Pereira é um empresário bem-sucedido que busca modernizar a gestão pública.",
      "propostas": [
          "Reduzir a burocracia para pequenas empresas.",
          "Incentivar a inovação e o empreendedorismo.",
          "Modernizar a administração pública com tecnologias digitais."
      ]
  },
  {
      "nome": "Maria Souza",
      "numero": 9101,
      "biografia": "Maria Souza é uma médica com foco em políticas públicas de saúde, atuando principalmente na prevenção de doenças.",
      "propostas": [
          "Ampliar o acesso aos serviços de saúde básica.",
          "Implementar programas de prevenção contra doenças crônicas.",
          "Garantir atendimento de qualidade em hospitais públicos."
      ]
  },
  {
      "nome": "João Costa",
      "numero": 1122,
      "biografia": "João Costa é um advogado especializado em direitos humanos e luta por justiça social.",
      "propostas": [
          "Defender os direitos das minorias.",
          "Promover a igualdade de oportunidades no mercado de trabalho.",
          "Reformar o sistema judiciário para torná-lo mais acessível."
      ]
  },
  {
      "nome": "Luciana Oliveira",
      "numero": 3344,
      "biografia": "Luciana Oliveira é uma engenheira ambiental comprometida com a sustentabilidade e proteção do meio ambiente.",
      "propostas": [
          "Criar políticas de incentivo à energia renovável.",
          "Implementar programas de reciclagem em áreas urbanas.",
          "Promover a preservação das florestas e recursos hídricos."
      ]
  },
  {
      "nome": "Rafael Lima",
      "numero": 5566,
      "biografia": "Rafael Lima é um economista com ampla experiência em gestão pública e desenvolvimento econômico.",
      "propostas": [
          "Aumentar o investimento em infraestrutura.",
          "Criar políticas para redução do desemprego.",
          "Promover a inclusão social através de programas de renda mínima."
      ]
  },
  {
      "nome": "Beatriz Fernandes",
      "numero": 7788,
      "biografia": "Beatriz Fernandes é uma socióloga focada em políticas de igualdade de gênero e defesa dos direitos das mulheres.",
      "propostas": [
          "Implementar políticas de igualdade salarial.",
          "Ampliar o acesso a creches para mães trabalhadoras.",
          "Combater a violência doméstica com políticas públicas eficientes."
      ]
  },
  {
      "nome": "Eduardo Gomes",
      "numero": 9911,
      "biografia": "Eduardo Gomes é um professor universitário e pesquisador em políticas públicas de educação e ciência.",
      "propostas": [
          "Investir em pesquisa científica e tecnológica.",
          "Aumentar o financiamento para universidades públicas.",
          "Promover a inclusão digital nas escolas."
      ]
  },
  {
      "nome": "Fernanda Alves",
      "numero": 2233,
      "biografia": "Fernanda Alves é uma jornalista e defensora da liberdade de expressão e dos direitos civis.",
      "propostas": [
          "Garantir a transparência nas ações governamentais.",
          "Defender a liberdade de imprensa.",
          "Promover políticas de proteção à privacidade dos cidadãos."
      ]
  },
  {
      "nome": "Ricardo Mendes",
      "numero": 4455,
      "biografia": "Ricardo Mendes é um ex-policial militar que busca fortalecer a segurança pública com foco na prevenção ao crime.",
      "propostas": [
          "Aumentar o efetivo policial nas áreas mais vulneráveis.",
          "Investir em programas de ressocialização de ex-detentos.",
          "Criar campanhas de conscientização contra a violência."
      ]
  }
]

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Candidato[]>,
) {
  res.status(200).json(candidatos);
}
