import { useState } from "react";
import Questao from "../questao/questao";
import type { QuestaoArray } from "../questao/questao";

interface TarefasProps {
  questaoInicial: QuestaoArray;
}

function Tarefas({ questaoInicial }: TarefasProps) {
  const [questaoAtual, setQuestaoAtual] = useState<QuestaoArray | null>(
    questaoInicial,
  );
  const [resultadoFinal, setResultadoFinal] = useState<string | null>(null);
  const [respostaClicada, setRespostaClicada] = useState<number | null>(null);

  function handleResponder(index: number) {
    if (!questaoAtual) {
      return;
    }

    const respostaSelecionada = questaoAtual.respostas[index];
    setRespostaClicada(index);

    if (respostaSelecionada.resposta) {
      setResultadoFinal(respostaSelecionada.resposta);
      setQuestaoAtual(null);
    } else if (respostaSelecionada.proximaQuestao) {
      setQuestaoAtual(respostaSelecionada.proximaQuestao);
      setRespostaClicada(null);
    }
  }

  function reiniciarFluxo() {
    setQuestaoAtual(questaoInicial);
    setResultadoFinal(null);
    setRespostaClicada(null);
  }

  return (
    <>
      {questaoAtual && (
        <Questao
          questao={questaoAtual}
          respondida={false}
          respostaClicada={respostaClicada}
          onResponder={handleResponder}
        />
      )}

      {resultadoFinal && (
        <div>
          <h2>Resultado</h2>
          <p>{resultadoFinal}</p>
          <button onClick={reiniciarFluxo}>Reiniciar fluxo</button>
        </div>
      )}
    </>
  );
}

export default Tarefas;
