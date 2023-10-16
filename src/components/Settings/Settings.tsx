import React, {ChangeEvent, FC} from 'react';
import {Wrapper} from "../Wrapper";
import {Input} from "../Input";
import {Button} from "../Button/Button";

type SettingsProps = {
    maxVal: number
    startVal: number
    error: boolean
    onChangeMaxVal: (e: ChangeEvent<HTMLInputElement>) => void
    onChangeStartVal: (e: ChangeEvent<HTMLInputElement>) => void
    setSettingsHandler: () => void
}

const Settings: FC<SettingsProps> = ({startVal, maxVal, error, onChangeMaxVal, onChangeStartVal, setSettingsHandler}) => {
    return (
        <Wrapper className="wrapper" $width={'500px'} $height={'310px'}>
            <Wrapper className="wrapper" $width={'460px'} $height={'160px'}>
                <label htmlFor="maxVal">max value:
                    <Input id={'maxVal'} type="number" onChange={onChangeMaxVal} value={maxVal} error={error}/>
                </label>
                <label htmlFor="startVal">start value:
                    <Input id={'startVal'} type="number" onChange={onChangeStartVal} value={startVal} error={error}/>
                </label>
            </Wrapper>
            <Wrapper className="wrapper" $width={'460px'} $height={'90px'}>
                <Button onClick={setSettingsHandler} disabled={error} name={'set'}/>
            </Wrapper>

        </Wrapper>
    )
        ;
};

export default Settings;