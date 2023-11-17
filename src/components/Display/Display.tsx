import React, {FC} from 'react';
import {StateType} from "../../store/reducer";

type DisplayProps = {
    state: StateType
}


export const Display: FC<DisplayProps> = ({state}) => {
    return (
        <div className="display"
             style={{color: (!state.isSettings && state.counter === state.maxVal) || state.error ? "red" : ''}}>{state.userMessage ? state.userMessage : state.counter}
        </div>
    );
};
// const Display = React.memo(DisplayS)

