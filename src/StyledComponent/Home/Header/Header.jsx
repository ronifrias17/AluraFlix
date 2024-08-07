import styled from "styled-components";

export const HeaderStylizado = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 98%;
  height: 125px;
  background: ${(props) => props.color || "#262626"};
  border-bottom: 4px solid rgba(34, 113, 209, 1);
  box-shadow: 0px 5px 29px 0px rgba(34, 113, 209, 0.7);
  padding: 5px 1%;

  .imgLogoContent {
    margin-left: 3%;
  }

  /* Estilos para tabletas (ancho de pantalla entre 600px y 900px) */
  @media (min-width: 600px) and (max-width: 1024px) {
    background: rgba(0, 0, 0, 0.9);

    .imgLogoContent {
      margin-left: 30px;
    }
  }

  /* Estilos para teléfonos inteligentes (ancho de pantalla menor a 600px) */
  @media (max-width: 599px) {
  }
`;
