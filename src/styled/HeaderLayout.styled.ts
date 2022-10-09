//@ts-ignore
import styled from "styled-components";

export const HeaderLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: auto;
  background-color: #f3f4ff;
  color: #000;
  padding: 30px 0px;
  @media (max-width: 1000px) {
    height: auto;
    padding: 40px 0px;
    height: auto;
  }
  @media (max-width: 600px) {
    height: auto;
    padding: 40px 0px;
  }
`;
