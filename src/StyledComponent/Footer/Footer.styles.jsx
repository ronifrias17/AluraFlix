import styled from "styled-components";

export const Footerstylizado = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 125px;
  background: #000000e6;
  border-top: 4px solid rgba(34, 113, 209, 1);
  box-shadow: 0px 5px 29px 0px rgba(34, 113, 209, 0.7);
  padding: 5px 2%;

  /* Estilos para tabletas (ancho de pantalla entre 600px y 900px) */
  @media (min-width: 600px) and (max-width: 1024px) {
  }

  /* Estilos para teléfonos inteligentes (ancho de pantalla menor a 600px) */
  @media (max-width: 599px) {
  }
`;
