import React, {FC, useCallback} from 'react';
import {Wrapper} from "../Wrapper";
import {Button} from "../Button/Button";
import {Display} from "../Display/Display";
import {increaseCountAC, resetCountAC, StateType} from "../../store/reducer";
import {useDispatch, useSelector} from "react-redux";
import {AppRootState} from "../../store/store";


const Counter: FC = () => {
    const state = useSelector<AppRootState, StateType>(store => store.state)
    const dispatch = useDispatch()

    const resetCounterHandler = useCallback(() => {
        dispatch(resetCountAC())
    }, [])
    const increaseCounterHandler = useCallback(() => {
        dispatch(increaseCountAC())
    }, [])
    return (
        <Wrapper>
            <Wrapper className="wrapperTop">
                <Display/>
            </Wrapper>
            <Wrapper className="wrapperBottom">
                <Button disabled={!!state.userMessage || state.counter === state.maxVal}
                        onClick={increaseCounterHandler} name={'inc'}/>
                <Button onClick={resetCounterHandler} disabled={!!state.userMessage} name={'reset'}/>
            </Wrapper>

        </Wrapper>
    );
};

export default Counter;