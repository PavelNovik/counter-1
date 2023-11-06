import React, {ChangeEvent, FC} from 'react';
import {S} from "./Input_Styles";

type InputProps = {
    name: string
    onChangeVal: (value: string) => void
    isError: boolean
    value: number
    type: string
}
export const Input: FC<InputProps> = (props) => {
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.onChangeVal(e.currentTarget.value)
    }
    return (
        <label htmlFor={props.name}>{props.name} :
            <S.Input name={props.name} id={props.name} type={props.type} onChange={onChangeHandler}
                     value={props.value}
                     isError={props.isError}/>
        </label>
    );
};

