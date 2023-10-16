import React, {FC} from 'react';
import {S} from './Button_Styles'

type ButtonProps = {
    onClick: ()=> void
    disabled: boolean
    name: string
}

export const Button: FC<ButtonProps> = ({onClick, disabled, name}) => {
    return (
        <S.Button disabled={disabled} onClick={onClick}>
            {name}
        </S.Button>
    );
};

