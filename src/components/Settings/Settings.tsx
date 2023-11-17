import React, {FC} from 'react';
import {Wrapper} from "../Wrapper";
import {Button} from "../Button/Button";
import {Input} from "../Input/Input";
import {changeMaxValAC, changeStartValAC, setCounterAC, StateType} from "../../store/reducer";
import {useDispatch} from "react-redux";

type SettingsProps = {
    state: StateType
}

const Settings: FC<SettingsProps> = ({state}) => {
    const dispatch = useDispatch()
    const onChangeMaxVal = (value: string) => {
        dispatch(changeMaxValAC(+value))
    }
    const onChangeStartVal = (value: string) => {
        dispatch(changeStartValAC(+value))
    }
    const setSettingsHandler = () => {
        dispatch(setCounterAC(state.startVal))
    }

    return (
        <Wrapper>
            <Wrapper className="wrapperTop">
                <Input name={'maxVal'} type={'number'} onChangeVal={onChangeMaxVal} value={state.maxVal}
                       error={state.error}/>
                <Input name={'startVal'} type={'number'} onChangeVal={onChangeStartVal} value={state.startVal}
                       error={state.error}/>
            </Wrapper>
            <Wrapper className="wrapperBottom">
                <Button onClick={setSettingsHandler} disabled={state.error || !state.userMessage} name={'set'}/>
            </Wrapper>

        </Wrapper>
    )
        ;
};

export default Settings;