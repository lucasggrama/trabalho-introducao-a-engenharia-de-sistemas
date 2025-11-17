import type { RespostaArray } from "../resposta/resposta";
import Resposta from "../resposta/resposta";
import { RepostasContainer } from "./questao.styles";

export type QuestaoArray = {
  titulo: string;
  enunciado: string;
  respostas: RespostaArray[];
};

interface QuestaoProps {
  questao: QuestaoArray;
  respondida: boolean;
  respostaClicada: number | null;
  onResponder: (index: number) => void;
}

function Questao({ questao, respondida, respostaClicada, onResponder }: QuestaoProps) {
  return (
    <>
      <h1>{questao.titulo}</h1>
      <p>{questao.enunciado}</p>

      <RepostasContainer>
        {questao.respostas.map((resposta, index) => (
          <Resposta
            key={index}
            resposta={resposta}
            clicado={respostaClicada === index}
            respondido={respondida}
            onClick={() => onResponder(index)}
          />
        ))}
      </RepostasContainer>
    </>
  );
}

export default Questao;
