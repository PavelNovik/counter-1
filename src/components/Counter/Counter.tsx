import React, {FC} from 'react';
import {Wrapper} from "../Wrapper";
import {Button} from "../Button/Button";
import {Display} from "../Display/Display";
import {increaseCountAC, resetCountAC, StateType} from "../../store/reducer";
import {useDispatch} from "react-redux";

type CounterProps = {
    state: StateType
}

const Counter: FC<CounterProps> = ({state}) => {
    const dispatch = useDispatch()

    const resetCounterHandler = () => {
        dispatch(resetCountAC())
    }
    const increaseCounterHandler = () => {
        dispatch(increaseCountAC())
    }
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