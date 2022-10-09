//@ts-ignore
import styled from "styled-components";

export const LogoStyled = styled.img`
  width: 30rem;
  height: 6.5rem;
  object-fit: cover;
  margin-bottom: 20px;
  @media (max-width: 1200px) {
    width: 20rem;
    object-fit: cover;
    height: 5rem;
  }
  @media (max-width: 600px) {
    width: 20rem;
    object-fit: cover;
    height: 6rem;
  }
`;
