import React, {ChangeEvent, FC} from 'react';
import {Wrapper} from "../Wrapper";
import {Button} from "../Button/Button";
import {Input} from "../Input/Input";

type SettingsProps = {
    userMessage: null | string
    maxVal: number
    startVal: number
    isError: boolean
    onChangeMaxVal: (e: ChangeEvent<HTMLInputElement>) => void
    onChangeStartVal: (e: ChangeEvent<HTMLInputElement>) => void
    setSettingsHandler: () => void
}

const Settings: FC<SettingsProps> = ({
                                         startVal,
                                         maxVal,
                                         isError,
                                         onChangeMaxVal,
                                         onChangeStartVal,
                                         setSettingsHandler,
                                         userMessage
                                     }) => {
    return (
        <Wrapper>
            <Wrapper className="wrapperTop">
                <Input name={'maxVal'} type={'number'} onChangeVal={onChangeMaxVal} value={maxVal} isError={isError}/>
                <Input name={'startVal'} type={'number'} onChangeVal={onChangeStartVal} value={startVal}
                       isError={isError}/>
            </Wrapper>
            <Wrapper className="wrapperBottom">
                <Button onClick={setSettingsHandler} disabled={isError || !userMessage} name={'set'}/>
            </Wrapper>

        </Wrapper>
    )
        ;
};

export default Settings;