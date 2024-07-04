import styled from "styled-components";

const FormularioStylizado = styled.form`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  margin: 5%;
  gap: 1em;

  .tituloForm {
    width: 100%;
    border-color: rgba(38, 38, 38, 1);
    border: 3px solid rgba(38, 38, 38, 1);
    border-left: none;
    border-right: none;
    font-family: "Source Sans 3";
    font-size: 20px;
    font-weight: 600;
    line-height: 24px;
    text-align: left;
    color: rgba(255, 255, 255, 1);
    background-color: transparent;
    margin-bottom: 3em;
  }

  .content {
    display: flex;
    flex-direction: column;
    margin-bottom: 3em;

    .select {
      width: 545px;
      height: 62px;
      background-color: transparent;
      border-radius: 10px;
      border: 3px solid rgba(38, 38, 38, 1);
      font-family: "Source Sans 3";
      font-size: 20px;
      font-weight: 600;
      line-height: 24px;
      text-align: left;
      color: rgba(165, 165, 165, 1);
      padding-left: 5px;
    }

    textarea {
      width: 573px;
      height: 220px;
      border-radius: 15px;
      border: 3px solid rgba(38, 38, 38, 1);
      background-color: transparent;
      resize: none;
      font-family: "Source Sans 3";
      padding: 20px 0 0 10px;
      font-size: 20px;
      font-weight: 600;
      line-height: 24px;
      text-align: left;
      color: rgba(165, 165, 165, 1);
    }
  }

  .botones {
    display: flex;
    margin-top: 3em;
    gap: 1em;
  }
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
  border: 3px solid rgba(38, 38, 38, 1);
  font-family: "Source Sans 3";
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
  text-align: left;
  color: rgba(165, 165, 165, 1);
  background-color: transparent;
  padding-left: 5px;
  box-sizing: border-box;
`;

export { FormularioStylizado, Labels, Inputs };
