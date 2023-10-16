import React, {ChangeEvent, FC} from 'react';
import {Wrapper} from "../Wrapper";
import {Button} from "../Button/Button";
import {Input} from "../Input/Input";

type SettingsProps = {
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
                                         setSettingsHandler
                                     }) => {
    return (
        <Wrapper className="wrapper" $width={'500px'} $height={'310px'}>
            <Wrapper className="wrapper" $width={'460px'} $height={'160px'}>
                <Input name={'maxVal'} type={'number'} onChangeVal={onChangeMaxVal} value={maxVal} isError={isError}/>
                <Input name={'startVal'} type={'number'} onChangeVal={onChangeStartVal} value={startVal}
                       isError={isError}/>
            </Wrapper>
            <Wrapper className="wrapper" $width={'460px'} $height={'90px'}>
                <Button onClick={setSettingsHandler} disabled={isError} name={'set'}/>
            </Wrapper>

        </Wrapper>
    )
        ;
};

export default Settings;