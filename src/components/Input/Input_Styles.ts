import styled from "styled-components";

type InputType = {
    isError: boolean
}

 const Input_Styles = styled.input<InputType>`
  background-color: ${props => props.isError ? '#fa6a6a' : 'white'};
  border-color: ${props => props.isError ? 'red' : 'default'};
  outline-color: ${props => props.isError ? 'red' : 'default'};
  text-align: center;
  margin-left: 50px;
  height: 40px;
  border-radius: 10px;
  font-size: 15px;
  font-weight: bold;
`

export const S = {
    Input: Input_Styles
}