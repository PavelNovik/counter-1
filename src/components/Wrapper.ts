import styled from "styled-components";
import React from "react";


export const Wrapper = styled.div`
  width: 500px;
  height: 310px;
  background-color: transparent;
  border: 3px solid cadetblue;
  border-radius: 10px;
  padding: 10px;
  margin: 5px;
  display: flex;
  gap: 10px;
  flex-direction: column;
  text-align: center;
  justify-content: center;
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
    flex-direction: row;
    justify-content: space-evenly;
  }

  & .display {
    font-size: 50px;
    font-weight: bold;
  }

`

// export const Wrapper = React.memo(StyledWrapper)