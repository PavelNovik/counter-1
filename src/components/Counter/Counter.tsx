import React, {FC} from 'react';
import {Wrapper} from "../Wrapper";
import {Button} from "../Button/Button";

type CounterProps = {
    counter: number
    maxVal: number
    error: boolean
    increaseCounterHandler: () => void
    resetCounterHandler: () => void
}

const Counter: FC<CounterProps> = ({counter, maxVal, error, increaseCounterHandler, resetCounterHandler}) => {
    return (
        <Wrapper className="wrapper" $width={'500px'} $height={'310px'}>
            <Wrapper className="wrapper" $width={'460px'} $height={'160px'}>
                <div className="display"
                     style={{color: counter === maxVal || error ? "red" : ''}}>{error ? 'incorrect value!' : counter}</div>
            </Wrapper>
            <Wrapper className="wrapper" $direction={'row'} $width={'460px'} $height={'90px'} $jc={'space-evenly'}>
                <Button disabled={error || counter === maxVal} onClick={increaseCounterHandler} name={'inc'}/>
                <Button onClick={resetCounterHandler} disabled={error} name={'reset'}/>
            </Wrapper>

        </Wrapper>
    );
};

export default Counter;