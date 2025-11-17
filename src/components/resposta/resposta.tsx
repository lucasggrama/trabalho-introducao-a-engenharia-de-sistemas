import type { QuestaoArray } from "../questao/questao";
import { RespostaContainer } from "./resposta.styles";

export interface RespostaArray {
  titulo: string;
  conteudo: string;
  proximaQuestao?: QuestaoArray;
  resposta?: string;
}

interface RespostaProps {
  resposta: RespostaArray;
  clicado: boolean;
  respondido: boolean;
  onClick: () => void;
}

function Resposta({ resposta, clicado, respondido, onClick }: RespostaProps) {
  return (
    <RespostaContainer
      clicado={clicado}
      respondido={respondido}
      onClick={onClick}
    >
      <p>
        {resposta.titulo} - {resposta.conteudo}
      </p>
    </RespostaContainer>
  );
}

export default Resposta;
