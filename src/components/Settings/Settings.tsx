import React, { FC, useCallback, useMemo } from 'react';
import { Wrapper } from "../Wrapper";
import { Button } from "../Button/Button";
import { Input } from "../Input/Input";
import { changeMaxValAC, changeStartValAC, setCounterAC, StateType } from "../../store/reducer";
import { useDispatch, useSelector } from "react-redux";
import { AppRootState } from "../../store/store";

const Settings: FC = () => {
    const state = useSelector<AppRootState, StateType>(store => store.state)
    const dispatch = useDispatch()
    const onChangeMaxVal = useCallback((value: string) => {
        dispatch(changeMaxValAC(+value))
    }, [dispatch])
    const onChangeStartVal = useCallback((value: string) => {
        dispatch(changeStartValAC(+value))
    }, [dispatch])
    const setSettingsHandler = useCallback(() => {
        dispatch(setCounterAC())
    }, [dispatch])

    const error = useMemo(() => state.error, [state.error])
    const userMessage = useMemo(() => state.userMessage, [state.userMessage])
    const maxVal = useMemo(() => state.maxVal, [state.maxVal])
    const startVal = useMemo(() => state.startVal, [state.startVal])

    return (
        <Wrapper>
            <Wrapper className="wrapperTop">
                <Input name={'maxVal'} type={'number'} onChangeVal={onChangeMaxVal} value={maxVal}
                    error={error} />
                <Input name={'startVal'} type={'number'} onChangeVal={onChangeStartVal} value={startVal}
                    error={error} />
            </Wrapper>
            <Wrapper className="wrapperBottom">
                <Button onClick={setSettingsHandler} disabled={error || !userMessage} name={'set'} />
            </Wrapper>

        </Wrapper>
    )
        ;
};

export default Settings;