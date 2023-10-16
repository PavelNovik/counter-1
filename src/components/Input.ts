import styled from "styled-components";

type InputType = {
    error: boolean
}

export const Input = styled.input<InputType>`
  background-color: ${props => props.error ? '#fa6a6a' : 'white'};
  border-color: ${props => props.error ? 'red' : 'default'};
  outline-color: ${props => props.error ? 'red' : 'default'};
  text-align: center;
  margin-left: 50px;
  height: 40px;
  border-radius: 10px;
  font-size: 15px;
  font-weight: bold;
`