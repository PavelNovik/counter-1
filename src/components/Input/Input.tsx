import React, {ChangeEvent, FC} from 'react';
import {S} from "./Input_Styles";

type InputProps = {
    name: string
    onChangeVal: (value: string) => void
    error: boolean
    value: number
    type: string
}
const StyledInput: FC<InputProps> = (props) => {
    console.log('input')
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.onChangeVal(e.currentTarget.value)
    }
    return (
        <label htmlFor={props.name}>{props.name} :
            <S.Input name={props.name} id={props.name} type={props.type} onChange={onChangeHandler}
                     value={props.value}
                     error={props.error}/>
        </label>
    );
};

export const Input = React.memo(StyledInput)
