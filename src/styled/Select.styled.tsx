/* @ts-ignore */
import styled from "styled-components";

export const SelectStyled = styled.select`
  width: 60%;
  height: 40px;
  background-color: #fff;
  border: none;
  outline: none;
  border-radius: 2px;
  color: #000;
  padding: 8px 12px;
  font-size: 14px;
  @media (max-width: 1200px) {
    width: 55%;
  }
  @media (max-width: 1000px) {
    width: 70%;
  }
  @media (max-width: 600px) {
    width: 90%;
  }
`;
