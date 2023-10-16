import styled from "styled-components";

type WrapperType = {
    $direction?: string
    $width?: string
    $height?: string
    $jc?: string
}

export const Wrapper = styled.div<WrapperType>`
  width: ${props => props.$width};
  height: ${props => props.$height};
  background-color: transparent;
  border: 3px solid cadetblue;
  border-radius: 10px;
  padding: 10px;
  margin: 5px;
  display: flex;
  gap: 10px;
  flex-direction: ${props => props.$direction || 'column'};
  text-align: center;
  justify-content: ${props => props.$jc || 'center'};
  align-items: center;
  color: cadetblue;
  font-size: 30px;
  
  & .display {
    font-size: 50px;
    font-weight: bold;
  }
  
`