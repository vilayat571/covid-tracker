//@ts-ignore
import styled from "styled-components";

type Color = {
  color: string;
};

export const CountryStyled = styled.option`
  color: ${({ color }: Color) => color};
`;
