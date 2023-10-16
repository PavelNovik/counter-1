import React, {FC} from 'react';

type DisplayProps = {
    isError: boolean
    userMessage: null | string
    counter: number
    maxVal: number

}
export const Display: FC<DisplayProps> = (props) => {
    return (
        <div className="display"
             style={{color: props.counter === props.maxVal || props.isError ? "red" : ''}}>{props.userMessage ? props.userMessage : props.counter}
        </div>
    );
};

