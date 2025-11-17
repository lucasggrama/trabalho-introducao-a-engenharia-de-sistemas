import styled from "styled-components";

interface RespostaProps {
  respondido: boolean;
  clicado: boolean;
}
export const RespostaContainer = styled.div<RespostaProps>`
cursor: pointer;
  border: 2px solid #f7eee9;
  border-radius: 8px;
  display: flex;
  padding: 0 8px;
  margin: 8px 0;
  background-color: ${(props) =>
    props.respondido ? (props.clicado ? "#8ace00" : "#e32636") : "#f7eee9"};
`;
