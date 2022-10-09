//@ts-ignore
import styled from "styled-components";

export const CardDivStyled = styled.div`
  width: 75%;
  display: grid;
  grid-template-columns: repeat(6, minmax(0, 1fr));
  grid-gap: 20px;
  margin: 0px 20px 30px;
  @media (max-width: 1100px){
    width: 100%;
  }
`;
