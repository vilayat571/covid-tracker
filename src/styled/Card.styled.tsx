//@ts-ignore
import styled from "styled-components";

export const CardStyled = styled.div`
  width: auto;
  height: auto;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  grid-column: span 2 / span 2;
  flex-direction: column;
  border-radius: 10px;
  border: none;
  outline: none;
  text-align: left;
  padding: 20px 10px;
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
  h3 {
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 4px;
    text-align: left;
    width: 100%;
    padding-left: 20px;
  }
  .count {
    font-size: 30px;
    font-weight: 900;
    text-align: left;
    width: 100%;
    padding-left: 20px;
  }
  p {
    margin-top: 4px;
    font-weight: 500;
    text-align: left;
    width: 100%;
    padding-left: 20px;
  }
  .description {
    margin-top: 4px;
    font-weight: 500;
    text-align: left;
    width: 100%;
    padding-left: 20px;
  }
  .case28 {
    margin-top: 4px;
    font-weight: 500;
    text-align: left;
    width: 100%;
    padding-left: 20px;
  }
  @media (max-width: 1100px) {
    grid-column: span 3 / span 3;
  }
  @media (max-width: 600px) {
    grid-column: span 6 / span 6;
  }
`;
