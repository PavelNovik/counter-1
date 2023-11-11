import styled, {css} from "styled-components";

type InputType = {
    error: boolean
}

 const Input_Styles = styled.input<InputType>`
     // background-color: ${props => props.error ? '#fa6a6a' : 'white'};
     // border-color: ${props => props.error ? 'red' : 'default'};
     // outline-color: ${props => props.error ? 'red' : 'default'};
   background-color: white;
   border-color: transparent;
   outline-color: cadetblue;
   text-align: center;
   margin-left: 50px;
   height: 40px;
   border-radius: 10px;
   font-size: 15px;
   font-weight: bold;

   ${props => props.error && css<InputType>`
     background-color: #fa6a6a;
     border-color: red;
     outline-color: red;
   `}
 `

export const S = {
    Input: Input_Styles
}