import styled from "styled-components";

export const Content = styled.div`
  display: flex;
  align-items: center;
  width: 30%;
  margin-right: 3%;
  gap: 1em;
  cursor: pointer;

  @media (min-width: 600px) and (max-width: 1024px) {
    width: 40%;
    
  }
`;
