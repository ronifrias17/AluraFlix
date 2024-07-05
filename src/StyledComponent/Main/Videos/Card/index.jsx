import styled from "styled-components";

export const CardStylizada = styled.div`
  display: flex;
  flex-direction: column;
  width: 370px;
  height: 320px;
  align-items: center;
  border-radius: 15px;
  border: 5px solid ${(props) => props.color};
  box-shadow: 0px -4px 5px 3px ${(props) => props.color} inset;
  background: rgba(0, 0, 0, 0.9);

  .imagenContent {
    width: 100%;
    height: 80%;
    border: 2px;
    box-sizing: border-box;
    background-size: cover;
    background-repeat: no-repeat;
    box-shadow: 0px 0px 17px 8px ${(props) => props.color} inset;
  }

  .rodapie {
    width: 80%;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding-top: 10px;
  }

  .rodabpieItems {
    display: flex;
    gap: 1em;
    font-family: "Roboto";
    font-size: 16px;
    font-weight: 800;
    line-height: 18.75px;
    text-align: left;
    color: rgba(255, 255, 255, 1);
    cursor: pointer;
  }
`;
