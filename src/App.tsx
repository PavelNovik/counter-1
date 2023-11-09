import React, {ChangeEvent, useEffect, useState} from 'react';
import './App.css';
import Counter from "./components/Counter/Counter";
import Settings from "./components/Settings/Settings";
import {
    changeMaxValAC,
    changeStartValAC,
    increaseCountAC,
    resetCountAC,
    setCounterAC,
    setErrorAC,
    StoreType
} from "./store/store";

type AppPropsType = {
    store: StoreType
}

function App({store}: AppPropsType) {
    const state = store.getState()
    // const [counter, setCounter] = useState(0)
    const counter = state.counter
    // const [maxVal, setMaxVal] = useState(5)
    const maxVal = state.maxVal
    // const [startVal, setStartVal] = useState(0)
    const startVal = state.startVal
    // const [isError, setIsError] = useState(false)
    const isError = state.isError
    const [userMessage, setUserMessage] = useState<null | string>(null)

    useEffect(() => {
        const currVal = localStorage.getItem('countVal')
        const currStartVal = localStorage.getItem('startVal')
        const currMaxVal = localStorage.getItem('maxVal')
        if (currVal) {
            // setCounter(JSON.parse(currVal))
            store.dispatch(setCounterAC(+currVal))
        }
        if (currStartVal) {
            // setStartVal(JSON.parse(currStartVal))
            store.dispatch(changeStartValAC(+currStartVal))
        }
        if (currMaxVal) {
            // setMaxVal(JSON.parse(currMaxVal))
            store.dispatch(changeMaxValAC(+currMaxVal))
        }
    }, []);

    // useEffect(() => {
    //     if (startVal < 0 || startVal >= maxVal) {
    //         // setIsError(true)
    //         store.dispatch(setErrorAC(true))
    //         setUserMessage('incorrect value!')
    //     } else {
    //         // setIsError(false)
    //         store.dispatch(setErrorAC(false))
    //         setUserMessage('enter values and press \'set\'')
    //     }
    // }, [startVal, maxVal]);
    // useEffect(() => {
    //
    // }, [counter]);

    const resetCounterHandler = () => {
        // setCounter(startVal)
        store.dispatch(resetCountAC())
        // localStorage.setItem('countVal', JSON.stringify(startVal))
    }
    const increaseCounterHandler = () => {
        // setCounter(prevState => {
        //     const newState = prevState + 1
        //     localStorage.setItem('countVal', JSON.stringify(newState))
        //     return newState
        // })
        store.dispatch(increaseCountAC())
    }
    const onChangeMaxVal = (value: string) => {
        // setMaxVal(JSON.parse(value))
        store.dispatch(changeMaxValAC(+value))
        setUserMessage('enter values and press \'set\'')
    }
    const onChangeStartVal = (value: string) => {
        // setStartVal(JSON.parse(value))
        store.dispatch(changeStartValAC(+value))
        setUserMessage('enter values and press \'set\'')
    }
    const setSettingsHandler = () => {
        // localStorage.setItem('maxVal', JSON.stringify(maxVal))
        // localStorage.setItem('startVal', JSON.stringify(startVal))
        // setCounter(startVal)
        store.dispatch(setCounterAC(startVal))
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

