import React, {useEffect} from 'react';
import './App.css';
import Counter from "./components/Counter/Counter";
import Settings from "./components/Settings/Settings";
import {getFromLocalStorage} from "./store/localStorage";
import {
    changeMaxValAC,
    changeStartValAC,
    increaseCountAC,
    resetCountAC,
    setCounterAC,
    StateType
} from "./store/reducer";
import {useDispatch, useSelector} from "react-redux";
import {AppRootState, store} from "./store/store";


function App() {
    const state = useSelector<AppRootState, StateType>(store => store.state)
    const dispatch = useDispatch()

    const resetCounterHandler = () => {
        dispatch(resetCountAC())
    }
    const increaseCounterHandler = () => {
        dispatch(increaseCountAC())
    }
    const onChangeMaxVal = (value: string) => {
        dispatch(changeMaxValAC(+value))
    }
    const onChangeStartVal = (value: string) => {
        dispatch(changeStartValAC(+value))
    }
    const setSettingsHandler = () => {
        dispatch(setCounterAC(state.startVal))
    }

    return (
        <div className="App">
            <Settings state={state}
                      onChangeMaxVal={onChangeMaxVal}
                      onChangeStartVal={onChangeStartVal}
                      setSettingsHandler={setSettingsHandler}
            />
            <Counter state={state}
                     increaseCounterHandler={increaseCounterHandler}
                     resetCounterHandler={resetCounterHandler}/>
        </div>
    );
}

export default App;

