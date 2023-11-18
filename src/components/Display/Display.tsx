import React, {FC, useMemo} from 'react';
import {StateType} from "../../store/reducer";
import {useSelector} from "react-redux";
import {AppRootState} from "../../store/store";


const StyledDisplay: FC = () => {
    const state = useSelector<AppRootState, StateType>(store => store.state)
    const userMessage = useMemo(()=> state.userMessage, [state.userMessage])
    const counter = useMemo(()=> state.counter, [state.counter])
    const redColor = (!state.isSettings && counter === state.maxVal) || state.error? "red" : ''
    return (
        <div className="display"
             style={{color: redColor }}>{userMessage ? userMessage : counter}
        </div>
    );
};
export const Display = React.memo(StyledDisplay)

