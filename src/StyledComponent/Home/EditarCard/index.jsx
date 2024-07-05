import styled from "styled-components";

export const FondoTrasparent = styled.div`
  background-color: rgba(3, 18, 47, 0.76);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

export const DialogEdit = styled.dialog`
  position: absolute;
  display: flex;
  justify-content: center;
  width: 800px;
  height: 1240px;
  top: 600px;
  border-radius: 15px;
  border: 5px solid rgba(107, 209, 255, 1);
  justify-content: space-between;
  opacity: 0px;
  background-color: rgba(3, 18, 47, 1);
`;
