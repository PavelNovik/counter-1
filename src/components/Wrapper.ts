import styled from "styled-components";

type WrapperType = {
    $direction?: string
    $jc?: string
}

export const Wrapper = styled.div<WrapperType>`
  width: 500px;
  height: 310px;
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
  
  & & {
    width: 460px;
  }
  
  & .wrapperTop {
    height: 160px;
  }
  & .wrapperBottom {
    height: 90px;
  }
  & .display {
    font-size: 50px;
    font-weight: bold;
  }
  
`