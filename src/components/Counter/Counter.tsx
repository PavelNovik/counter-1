import React, {FC} from 'react';
import {Wrapper} from "../Wrapper";
import {Button} from "../Button/Button";
import {Display} from "../Display/Display";
import {StateType} from "../../store/reducer";

type CounterProps = {
    state: StateType
    increaseCounterHandler: () => void
    resetCounterHandler: () => void
}

const Counter: FC<CounterProps> = ({state, increaseCounterHandler, resetCounterHandler}) => {
    return (
        <Wrapper>
            <Wrapper className="wrapperTop">
                <Display state={state}/>
            </Wrapper>
            <Wrapper className="wrapperBottom" $direction={'row'} $jc={'space-evenly'}>
                <Button disabled={!!state.userMessage || state.counter === state.maxVal}
                        onClick={increaseCounterHandler} name={'inc'}/>
                <Button onClick={resetCounterHandler} disabled={!!state.userMessage} name={'reset'}/>
            </Wrapper>

        </Wrapper>
    );
};

export default Counter;