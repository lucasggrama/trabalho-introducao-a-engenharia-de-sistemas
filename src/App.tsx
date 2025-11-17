import { useState } from "react";
import { AppContainer } from "./App.styles";
import Tarefas from "./components/tarefas/tarefas";
import type { QuestaoArray } from "./components/questao/questao";

const transportePublico: QuestaoArray = {
  titulo: "Transporte Público",
  enunciado: "O trânsito da cidade de Belo Horizonte está caótico! Qual sua primeira ação para resolver isso?",
  respostas: [
    {
      titulo: "1",
      conteudo: "Adicionar semáforos inteligentes",
      proximaQuestao: {
        titulo: "Semáforos Inteligentes",
        enunciado: "Os semáforos agora se adaptam ao fluxo de carros, mas o sistema começa a travar. O que você faz?",
        respostas: [
          {
            titulo: "1",
            conteudo: "Analisa os dados e descobre a causa do problema",
            resposta: "Parabéns! Você descobriu a raiz do problema e pôde consertá-lo, pensando como um verdadeiro engenheiro de sistemas!",
          },
          {
            titulo: "2",
            conteudo: "Contrata técnicos para resolver o problema",
            resposta: "Boa tentativa! Você resolveu o problema local, mas sem enxergar o sistema completo.",
          },
          {
            titulo: "3",
            conteudo: "Desativa os semáforos automáticos e volta ao modo manual",
            resposta: "Fracasso parcial :( Um engenheiro de sistemas precisa pensar em soluções sustentáveis e consistentes",
          },
        ],
      },
    },
    {
      titulo: "2",
      conteudo: "Criar um aplicativo para transporte público",
      proximaQuestao: {
        titulo: "Aplicativo de Transporte",
        enunciado: "O aplicativo ajuda os usuários a ver horários e rotas, mas começa a ter reclamações de lentidão e dados incorretos. O que você faz?",
        respostas: [
          {
            titulo: "1",
            conteudo: "Integra o app com sensores em tempo real dos ônibus",
            resposta: "O sistema fica preciso e melhora a confiança dos usuários. Parabéns, você usou integração e automação, pilares da Engenharia de Sistemas!",
          },
          {
            titulo: "2",
            conteudo: "Contrata mais pessoas pra atualizar manualmente os horários",
            resposta: "Boa tentativa, mas faltou automatização. Um sistema não deve depender só de pessoas",
          },
          {
            titulo: "3",
            conteudo: "Ignora as críticas, achando que é apenas um detalhe",
            resposta: "Os usuários abandonam o app. Em sistemas, os feedbacks dos usuários são essenciais!",
          },
        ],
      },
    },
    {
      titulo: "3",
      conteudo: "Aumentar a frota de ônibus",
      proximaQuestao: {
        titulo: "Aumento da Frota",
        enunciado: "O número de ônibus cresce, mas o congestionamento piora. O que você faz?",
        respostas: [
          {
            titulo: "1",
            conteudo: "Analisa o fluxo e ajusta rotas com base em dados",
            resposta: "Sucesso! Você aplicou análise de sistemas para otimizar o transporte e conseguiu reduzir o tempo de viagem e o consumo de combustível",
          },
          {
            titulo: "2",
            conteudo: "Mantém o mesmo número de rotas, só que com mais veículos",
            resposta: "Falhou! Seu sistema fica caro e ineficiente. Mais recursos nem sempre resultam em um melhor sistema.",
          },
          {
            titulo: "3",
            conteudo: "Reduz a frota de novo",
            resposta: "Fracasso! Os usuários ficam sem transporte. Um engenheiro de sistemas precisa pensar em soluções consistentes",
          },
        ],
      },
    },
  ],
};

const ciberseguranca: QuestaoArray = {
  titulo: "Cibersegurança",
  enunciado: "Você está fazendo compras online mas percebe que muitos anúncios são golpes. O que você faz?",
  respostas: [
    {
      titulo: "1",
      conteudo: "Desenvolve um sistema de detecção automática de fraudes",
      proximaQuestao: {
        titulo: "Sistema de Detecção",
        enunciado: "O sistema começa a bloquear até anúncios verdadeiros. O que você faz?",
        respostas: [
          {
            titulo: "1",
            conteudo: "Reprograma o algoritmo para aprender a distinguir anúncios falsos e legítimos",
            resposta: "Sucesso! Você aplicou aprendizado de máquina e visão sistêmica para aprimorar a segurança digital",
          },
          {
            titulo: "2",
            conteudo: "Aumenta os filtros de segurança sem testar",
            resposta: "Falhou! O sistema bloqueia quase tudo e os usuários reclamam. É preciso equilibrar confiabilidade e usabilidade",
          },
          {
            titulo: "3",
            conteudo: "Ignora o problema, achando que é pequeno",
            resposta: "Fracasso total! Golpes aumentam, e os usuários perdem confiança na plataforma. Na Engenharia de Sistemas, falhas pequenas podem gerar grandes impactos.",
          },
        ],
      },
    },
    {
      titulo: "2",
      conteudo: "Criar uma campanha de conscientização",
      proximaQuestao: {
        titulo: "Campanha de Conscientização",
        enunciado: "Você faz posts e palestras sobre golpes online, mas o engajamento é baixo. O que você faz?",
        respostas: [
          {
            titulo: "1",
            conteudo: "Parceria com influenciadores e escolas",
            resposta: "Sucesso! A campanha viraliza e reduz fraudes em 20%. Você usou comunicação em rede, parte importante da visão sistêmica.",
          },
          {
            titulo: "2",
            conteudo: "Continua postando do mesmo jeito",
            resposta: "Parcial. Poucas pessoas veem e o impacto é mínimo. Um sistema precisa se adaptar ao público!",
          },
          {
            titulo: "3",
            conteudo: "Desiste da campanha",
            resposta: "Fracasso. Golpes continuam crescendo. Abandonar o sistema não é uma solução, é preciso ajustar e melhorar!",
          },
        ],
      },
    },
    {
      titulo: "3",
      conteudo: "Criar um antivírus para o site",
      proximaQuestao: {
        titulo: "Antivírus do Site",
        enunciado: "O antivírus bloqueia arquivos suspeitos, mas os usuários reclamam que ele atrapalha o uso normal do site. O que você faz?",
        respostas: [
          {
            titulo: "1",
            conteudo: "Analisa e ajusta a sensibilidade do antivírus",
            resposta: "Sucesso! Você pensou como engenheiro de sistemas, equilibrando desempenho e segurança.",
          },
          {
            titulo: "2",
            conteudo: "Ignora as reclamações e mantém o antivírus mesmo com defeitos",
            resposta: "Fracasso parcial. O sistema fica seguro, mas ninguém quer usar. Segurança sem usabilidade não é solução!",
          },
          {
            titulo: "3",
            conteudo: "Desativa o antivírus pra facilitar o acesso",
            resposta: "Fracasso total! O site é invadido e dados são vazados. Segurança deve ser parte integrada, não opcional.",
          },
        ],
      },
    },
  ],
};

const energiasSustentaveis: QuestaoArray = {
  titulo: "Energias Sustentáveis",
  enunciado: "Você trabalha em uma hidrelétrica e percebe que a estrutura afeta o ecossistema ao redor. O que você faz?",
  respostas: [
    {
      titulo: "1",
      conteudo: "Planeja um sistema híbrido com energia solar e eólica",
      proximaQuestao: {
        titulo: "Sistema Híbrido",
        enunciado: "Os custos aumentam e o projeto corre risco de ser cancelado. O que você faz?",
        respostas: [
          {
            titulo: "1",
            conteudo: "Cria simulações para mostrar o retorno a longo prazo",
            resposta: "Sucesso! O governo apoia o projeto e ele vira referência em energia limpa. Você pensou a longo prazo e provou o valor da integração entre sistemas.",
          },
          {
            titulo: "2",
            conteudo: "Corta partes do projeto pra economizar",
            resposta: "Parcial! O custo cai, mas a eficiência também. Um sistema mal dimensionado pode não atingir seus objetivos.",
          },
          {
            titulo: "3",
            conteudo: "Ignora o impacto ambiental e mantém o plano original",
            resposta: "Fracasso ético! A usina gera energia, mas destrói habitats e recebe críticas. Um engenheiro de sistemas também deve considerar impactos sociais e ambientais.",
          },
        ],
      },
    },
    {
      titulo: "2",
      conteudo: "Implementar um sistema de monitoramento ambiental",
      proximaQuestao: {
        titulo: "Monitoramento Ambiental",
        enunciado: "Os sensores começam a dar leituras diferentes do esperado. O que você faz?",
        respostas: [
          {
            titulo: "1",
            conteudo: "Revisa a calibração dos sensores e o fluxo de dados",
            resposta: "Sucesso! O sistema passa a gerar alertas precisos e ajuda na preservação. Você garantiu confiabilidade ao sistema por meio de análises concretas.",
          },
          {
            titulo: "2",
            conteudo: "Ignora os dados inconsistentes e continua o projeto",
            resposta: "Fracasso! Erros passam despercebidos e causam desequilíbrio ambiental. Dados ruins = decisões ruins.",
          },
          {
            titulo: "3",
            conteudo: "Substitui os sensores por modelos mais caros",
            resposta: "Fracasso parcial. Os custos aumentam e o problema continua. Tecnologia cara sem análise não resolve o sistema.",
          },
        ],
      },
    },
    {
      titulo: "3",
      conteudo: "Criar campanhas de consumo consciente",
      proximaQuestao: {
        titulo: "Campanhas de Consumo",
        enunciado: "As pessoas acham as campanhas chatas e não mudam seus hábitos. O que você faz?",
        respostas: [
          {
            titulo: "1",
            conteudo: "Cria um app gamificado que recompensa quem economiza energia",
            resposta: "Parabéns! O consumo cai e o projeto vira sucesso nacional. Você uniu tecnologia, sociedade e sustentabilidade — visão sistêmica total.",
          },
          {
            titulo: "2",
            conteudo: "Continua postando cartazes tradicionais",
            resposta: "Fracasso parcial. Comunicação precisa se adaptar às pessoas e contextos.",
          },
          {
            titulo: "3",
            conteudo: "Desiste das campanhas",
            resposta: "Fracasso! Engenheiros de sistemas não desistem, eles redesenham!",
          },
        ],
      },
    },
  ],
};

function App() {
  const [arvoreAtiva, setArvoreAtiva] = useState<QuestaoArray | null>(null);

  function selecionarArvore(arvore: QuestaoArray) {
    setArvoreAtiva(arvore);
  }

  function fecharArvore() {
    setArvoreAtiva(null);
  }

  return (
    <AppContainer>
      {!arvoreAtiva ? (
        <>
          <button onClick={() => selecionarArvore(transportePublico)}>
            Transporte Público
          </button>
          <button onClick={() => selecionarArvore(ciberseguranca)}>
            Cibersegurança
          </button>
          <button onClick={() => selecionarArvore(energiasSustentaveis)}>
            Energias Sustentáveis
          </button>
        </>
      ) : (
        <>
          <button onClick={fecharArvore}>Voltar ao menu</button>
          <Tarefas questaoInicial={arvoreAtiva} />
        </>
      )}
    </AppContainer>
  );
}

export default App;
