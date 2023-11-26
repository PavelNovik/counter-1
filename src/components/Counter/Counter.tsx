import React, {FC, useCallback, useMemo} from 'react';
import {Wrapper} from "../Wrapper";
import {Button} from "../Button/Button";
import {Display} from "../Display/Display";
import {increaseCountAC, resetCountAC, StateType} from "../../store/reducer";
import {useDispatch, useSelector} from "react-redux";
import {AppRootState} from "../../store/store";


const Counter: FC = () => {
    console.log('counter')
    const state = useSelector<AppRootState, StateType>(store => store.state)
    const dispatch = useDispatch()
    const disableCounterBtn = useMemo(()=> !!state.userMessage || state.counter === state.maxVal, [state])
    const disableResetBtn = useMemo(()=> !!state.userMessage,[state])

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
                <Button disabled={disableCounterBtn}
                        onClick={increaseCounterHandler} name={'inc'}/>
                <Button onClick={resetCounterHandler} disabled={disableResetBtn} name={'reset'}/>
            </Wrapper>

        </Wrapper>
    );
};

export default Counter;