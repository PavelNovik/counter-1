import React, {ChangeEvent, FC} from 'react';
import {S} from "./Input_Styles";
import {useSelector} from "react-redux";
import {AppRootState} from "../../store/store";
import {StateType} from "../../store/reducer";

type InputProps = {
    name: string
    onChangeVal: (value: string) => void
    value: number
    type: string
}
export const Input: FC<InputProps> = React.memo((props) => {
    const error = useSelector<AppRootState, boolean>(store => store.state.error)
    console.log('input')
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.onChangeVal(e.currentTarget.value)
    }
    return (
        <label htmlFor={props.name}>{props.name} :
            <S.Input name={props.name} id={props.name} type={props.type} onChange={onChangeHandler}
                     value={props.value}
                     error={error}/>
        </label>
    );
})

