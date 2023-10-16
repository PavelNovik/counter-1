import styled from "styled-components";

const Button = styled.button`
  padding: 5px 20px;
  background-color: cadetblue;
  border: none;
  border-radius: 5px;
  color: #2d2d41;
  font-size: 30px;
  font-weight: bold;
  cursor: pointer;

  &:disabled {
    opacity: 0.5;
  }
`
export const S = {
    Button
}