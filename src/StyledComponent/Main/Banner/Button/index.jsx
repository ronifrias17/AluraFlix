import styled from "styled-components";

export const ButtonContainer = styled.div`
  display: inline;
  width: 100%;
  padding-left: 45px;
`;

const ButtonStylizado = styled.button`
  font-family: "Roboto";
  font-weight: 800;
  color: #fff;
  background-color: ${(props) => props.color || "#6bd1ff"};
  font-size: ${(props) => props.fontSize};
  width: ${(props) => props.ancho || "355px"};
  height: ${(props) => props.alto || "50px"};
  border-radius: 15px;
  text-transform: uppercase;
  border: none;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }

  @media (min-width: 600px) and (max-width: 1024px) {
    font-size: 32px;
  }
`;

export default ButtonStylizado;
