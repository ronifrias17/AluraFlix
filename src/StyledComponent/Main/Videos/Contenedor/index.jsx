import styled from "styled-components";

export const VideoContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 30px 35px 60px 35px;
  width: 100%;
  box-sizing: border-box;
  flex-direction: row;
  flex-wrap: wrap;
  padding-bottom: 40px;

  /* Estilos para tabletas (ancho de pantalla entre 600px y 900px) */
  @media (min-width: 600px) and (max-width: 1024px) {
    width: auto;
    flex-wrap: nowrap;
    gap: 40px;
    overflow-x: auto;
    padding-bottom: 0;
    margin-bottom: 40px;
    margin-right: 0;
  }

  /* Estilos para teléfonos inteligentes (ancho de pantalla menor a 600px) */
  @media (max-width: 599px) {
  }
`;
