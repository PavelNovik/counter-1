import React, {FC} from 'react';
import {Wrapper} from "../Wrapper";
import {Button} from "../Button/Button";
import {Display} from "../Display/Display";

type CounterProps = {
    counter: number
    maxVal: number
    isError: boolean
    increaseCounterHandler: () => void
    resetCounterHandler: () => void
    userMessage: null | string
}

const Counter: FC<CounterProps> = ({
                                       counter,
                                       maxVal,
                                       isError,
                                       increaseCounterHandler,
                                       resetCounterHandler,
                                       userMessage
                                   }) => {
    return (
        <Wrapper className="wrapper" $width={'500px'} $height={'310px'}>
            <Wrapper className="wrapper" $width={'460px'} $height={'160px'}>
                <Display isError={isError} userMessage={userMessage} counter={counter} maxVal={maxVal}/>
            </Wrapper>
            <Wrapper className="wrapper" $direction={'row'} $width={'460px'} $height={'90px'} $jc={'space-evenly'}>
                <Button disabled={!!userMessage || counter === maxVal} onClick={increaseCounterHandler} name={'inc'}/>
                <Button onClick={resetCounterHandler} disabled={!!userMessage} name={'reset'}/>
            </Wrapper>

        </Wrapper>
    );
};

export default Counter;