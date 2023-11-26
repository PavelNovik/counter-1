import React, {FC, useMemo} from 'react';
import {StateType} from "../../store/reducer";
import {useSelector} from "react-redux";
import {AppRootState} from "../../store/store";


export const Display: FC = React.memo(() => {
    console.log('display')
    const state = useSelector<AppRootState, StateType>(store => store.state)
    const userMessage = useMemo(()=> state.userMessage, [state])
    const counter = useMemo(()=> state.counter, [state])
    const redColor = (!state.isSettings && counter === state.maxVal) || state.error? "red" : ''
    return (
        <div className="display"
             style={{color: redColor }}>{userMessage ? userMessage : counter}
        </div>
    );
})
