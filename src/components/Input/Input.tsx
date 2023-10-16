import React, {ChangeEvent, FC} from 'react';
import {S} from "./Input_Styles";

type InputProps = {
    name: string
    onChangeVal: (e: ChangeEvent<HTMLInputElement>) => void
    isError: boolean
    value: number
    type: string
}
export const Input: FC<InputProps> = (props) => {
    return (
        <label htmlFor={props.name}>max value:
            <S.Input name={props.name} id={props.name} type={props.type} onChange={props.onChangeVal}
                     value={props.value}
                     isError={props.isError}/>
        </label>
    );
};

