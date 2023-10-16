import React, {ChangeEvent, useEffect, useState} from 'react';
import './App.css';
import {Wrapper} from "./components/Wrapper";
import {Input} from "./components/Input";
import {Button} from "./components/Button/Button";
import Counter from "./components/Counter/Counter";
import Settings from "./components/Settings/Settings";

function App() {
    const [counter, setCounter] = useState(0)
    const [maxVal, setMaxVal] = useState(0)
    const [startVal, setStartVal] = useState(0)
    const [error, setError] = useState(false)

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
            setError(true)
        } else {
            setError(false)
        }
    }, [startVal, maxVal]);
    // useEffect(() => {
    //
    // }, [counter]);

    const resetCounterHandler = () => {
        setCounter(startVal)
    }
    const increaseCounterHandler = () => {
        setCounter( prevState => {
            const newState = prevState + 1
            localStorage.setItem('countVal', JSON.stringify(newState))
           return newState
        })
    }
    const onChangeMaxVal = (e: ChangeEvent<HTMLInputElement>) => {
        setMaxVal(JSON.parse(e.currentTarget.value))
    }
    const onChangeStartVal = (e: ChangeEvent<HTMLInputElement>) => {
        setStartVal(JSON.parse(e.currentTarget.value))
    }
    const setSettingsHandler = () => {
        localStorage.setItem('maxVal', JSON.stringify(maxVal))
        localStorage.setItem('startVal', JSON.stringify(startVal))
        setCounter(startVal)
    }

    return (
        <div className="App">
            <Settings startVal={startVal} maxVal={maxVal} error={error} onChangeMaxVal={onChangeMaxVal}
                      onChangeStartVal={onChangeStartVal} setSettingsHandler={setSettingsHandler}/>
            <Counter counter={counter} error={error} maxVal={maxVal} increaseCounterHandler={increaseCounterHandler}
                     resetCounterHandler={resetCounterHandler}/>

        </div>
    );
}

export default App;

