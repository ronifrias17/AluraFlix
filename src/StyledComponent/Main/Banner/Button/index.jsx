import styled from "styled-components";

export const ButtonContainer = styled.div`
  display: flex;
  /* width: 100; */
  padding-left: 45px;

  /* Estilos para tabletas (ancho de pantalla entre 600px y 900px) */
  @media (min-width: 600px) and (max-width: 1024px) {
    justify-content: center;
  }

  /* Estilos para teléfonos inteligentes (ancho de pantalla menor a 600px) */
  @media (max-width: 599px) {
  }
`;

const ButtonStylizado = styled.button`
  font-family: "Roboto";
  font-weight: 800;
  color: #fff;
  background-color: ${(props) => props.color || "#6bd1ff"};
  font-size: ${(props) => props.fontSize};
  width: ${(props) => props.ancho || "370px"};
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
    width: 450px;
  }
`;

export default ButtonStylizado;
