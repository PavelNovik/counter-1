import React, {ChangeEvent, FC} from 'react';
import {Wrapper} from "../Wrapper";
import {Button} from "../Button/Button";
import {Input} from "../Input/Input";
import {StateType} from "../../store/store";

type SettingsProps = {
    state: StateType
    onChangeMaxVal: (value: string) => void
    onChangeStartVal: (value: string) => void
    setSettingsHandler: () => void
}

const Settings: FC<SettingsProps> = ({
                                         onChangeMaxVal,
                                         onChangeStartVal,
                                         setSettingsHandler,
                                         state
                                     }) => {
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