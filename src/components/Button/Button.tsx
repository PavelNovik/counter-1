import React, {FC} from 'react';
import {S} from './Button_Styles'

type ButtonProps = {
    onClick: ()=> void
    disabled: boolean
    name: string
}

export const StyledButton: FC<ButtonProps> = ({onClick, disabled, name}) => {
    return (
        <S.Button disabled={disabled} onClick={onClick}>
            {name}
        </S.Button>
    );
};

export const Button = React.memo(StyledButton)
