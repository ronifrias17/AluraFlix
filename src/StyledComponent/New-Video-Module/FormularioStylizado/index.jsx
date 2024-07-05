import styled from "styled-components";

const FormularioStylizado = styled.form`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  margin: 5%;
  gap: ${(props) => props.margin || "1em"};
  justify-content: ${(props) => props.justify};

  .content {
    display: flex;
    flex-direction: column;
    margin-bottom: 3em;
    justify-content: center;
  }
`;

const TituloContent = styled.div`
  width: ${(props) => props.ancho || "100%"};
  border: ${(props) => props.border || "none"} solid
    ${(props) => props.color || "rgba(38, 38, 38, 1)"};
  border-left: none;
  border-right: none;
  font-family: "Source Sans 3";
  font-size: ${(props) => props.size || "20px"};
  font-weight: ${(props) => props.bold || "600"};
  line-height: 24px;
  text-align: left;
  color: ${(props) => props.color || "rgba(255, 255, 255, 1)"};
  background-color: transparent;
  margin-bottom: ${(props) => props.margin || "3em"};
  text-transform: ${(props) => props.transform};
`;

const Labels = styled.label`
  font-family: "Source Sans 3";
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
  text-align: left;
  color: rgba(255, 255, 255, 1);
  margin-bottom: 0.5em;
`;

const Inputs = styled.input`
  width: ${(props) => props.tamaño || "545px"};
  height: 62px;
  border-radius: 10px;
  border: 3px solid ${(props) => props.color || "rgba(38, 38, 38, 1)"};
  font-family: "Source Sans 3";
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
  text-align: left;
  color: rgba(165, 165, 165, 1);
  background-color: transparent;
  padding-left: 5px;
  box-sizing: border-box;
  align-items: center;
`;

const Select = styled.select`
  width: ${(props) => props.tamaño || "545px"};
  height: 62px;
  background-color: transparent;
  border-radius: 10px;
  border: 3px solid ${(props) => props.color || "rgba(38, 38, 38, 1)"};
  font-family: "Source Sans 3";
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
  text-align: left;
  color: rgba(165, 165, 165, 1);
  padding-left: 5px;
  align-items: center;
`;

const TextArea = styled.textarea`
  width: 530px;
  height: 220px;
  border-radius: 15px;
  border: 3px solid ${(props) => props.color || "rgba(38, 38, 38, 1)"};
  background-color: transparent;
  resize: none;
  font-family: "Source Sans 3";
  padding: 20px 0 0 10px;
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
  text-align: left;
  color: rgba(165, 165, 165, 1);
  align-items: center;
`;

const BotonesContent = styled.div`
  display: flex;
  width: ${(props) => props.ancho || "100%"};
  margin-left: 0.5em;
  justify-content: ${(props) => props.justify};
  gap: ${(props) => props.gap};
  align-items: center;
`;

export {
  FormularioStylizado,
  Labels,
  Inputs,
  TituloContent,
  Select,
  TextArea,
  BotonesContent,
};
