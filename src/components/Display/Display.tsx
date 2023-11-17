import React, {FC} from 'react';
import {StateType} from "../../store/reducer";

type DisplayProps = {
    state: StateType
}


const StyledDisplay: FC<DisplayProps> = ({state}) => {
    return (
        <div className="display"
             style={{color: (!state.isSettings && state.counter === state.maxVal) || state.error ? "red" : ''}}>{state.userMessage ? state.userMessage : state.counter}
        </div>
    );
};
export const Display = React.memo(StyledDisplay)

