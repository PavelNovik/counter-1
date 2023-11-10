import React, { useEffect } from 'react';
import './App.css';
import Counter from "./components/Counter/Counter";
import Settings from "./components/Settings/Settings";
import {
    changeMaxValAC,
    changeStartValAC,
    increaseCountAC,
    resetCountAC,
    setCounterAC,
    StoreType
} from "./store/store";
import {getFromLocalStorage} from "./store/localStorage";

type AppPropsType = {
    store: StoreType
}

function App({store}: AppPropsType) {
    const state = store.getState()

    useEffect(() => {
        const currVal = getFromLocalStorage('countVal')
        const currStartVal = getFromLocalStorage('startVal')
        const currMaxVal = getFromLocalStorage('maxVal')
        if (currStartVal) {
            store.dispatch(changeStartValAC(currStartVal))
        }
        if (currMaxVal) {
            store.dispatch(changeMaxValAC(currMaxVal))
        }
        if (currVal) {
            store.dispatch(setCounterAC(currVal))
        }
    }, []);

    const resetCounterHandler = () => {
        store.dispatch(resetCountAC())
    }
    const increaseCounterHandler = () => {
        store.dispatch(increaseCountAC())
    }
    const onChangeMaxVal = (value: string) => {
        store.dispatch(changeMaxValAC(+value))
    }
    const onChangeStartVal = (value: string) => {
        store.dispatch(changeStartValAC(+value))
    }
    const setSettingsHandler = () => {
        store.dispatch(setCounterAC(state.startVal))
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

