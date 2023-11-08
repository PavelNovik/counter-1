import React, {ChangeEvent, useEffect, useState} from 'react';
import './App.css';
import Counter from "./components/Counter/Counter";
import Settings from "./components/Settings/Settings";
import {StoreType} from "./store/store";

type AppPropsType = {
    store: StoreType
}

function App(props: AppPropsType) {
    const store = props.store
    const [counter, setCounter] = useState(0)
    const [maxVal, setMaxVal] = useState(5)
    const [startVal, setStartVal] = useState(0)
    const [isError, setIsError] = useState(false)
    const [userMessage, setUserMessage] = useState<null | string>(null)

    useEffect(() => {
        const currVal = localStorage.getItem('countVal')
        const currStartVal = localStorage.getItem('startVal')
        const currMaxVal = localStorage.getItem('maxVal')
        if (currVal) {
            setCounter(JSON.parse(currVal))
        }
        if (currStartVal) {
            setStartVal(JSON.parse(currStartVal))
        }
        if (currMaxVal) {
            setMaxVal(JSON.parse(currMaxVal))
        }
    }, []);

    useEffect(() => {
        if (startVal < 0 || startVal >= maxVal) {
            setIsError(true)
            setUserMessage('incorrect value!')
        } else {
            setIsError(false)
            // setUserMessage('enter values and press \'set\'')
        }
    }, [startVal, maxVal]);
    // useEffect(() => {
    //
    // }, [counter]);

    const resetCounterHandler = () => {
        setCounter(startVal)
        localStorage.setItem('countVal', JSON.stringify(startVal))
    }
    const increaseCounterHandler = () => {
        setCounter(prevState => {
            const newState = prevState + 1
            localStorage.setItem('countVal', JSON.stringify(newState))
            return newState
        })
    }
    const onChangeMaxVal = (value: string) => {
        setMaxVal(JSON.parse(value))
        setUserMessage('enter values and press \'set\'')
    }
    const onChangeStartVal = (value: string) => {
        setStartVal(JSON.parse(value))
        setUserMessage('enter values and press \'set\'')
    }
    const setSettingsHandler = () => {
        localStorage.setItem('maxVal', JSON.stringify(maxVal))
        localStorage.setItem('startVal', JSON.stringify(startVal))
        setCounter(startVal)
        setUserMessage(null)
    }

    return (
        <div className="App">
            <Settings userMessage={userMessage}
                      startVal={startVal}
                      maxVal={maxVal}
                      isError={isError}
                      onChangeMaxVal={onChangeMaxVal}
                      onChangeStartVal={onChangeStartVal}
                      setSettingsHandler={setSettingsHandler}/>
            <Counter counter={counter}
                     userMessage={userMessage}
                     isError={isError}
                     maxVal={maxVal}
                     increaseCounterHandler={increaseCounterHandler}
                     resetCounterHandler={resetCounterHandler}/>

        </div>
    );
}

export default App;

