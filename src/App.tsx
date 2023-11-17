import React from 'react';
import './App.css';
import Counter from "./components/Counter/Counter";
import Settings from "./components/Settings/Settings";
import {StateType} from "./store/reducer";
import {useSelector} from "react-redux";
import {AppRootState} from "./store/store";

function App() {
    const state = useSelector<AppRootState, StateType>(store => store.state)


    return (
        <div className="App">
            <Settings state={state}/>
            <Counter state={state}/>
        </div>
    );
}

export default App;

