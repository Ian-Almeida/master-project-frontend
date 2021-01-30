import React, { InputHTMLAttributes } from 'react';
import {IconBaseProps} from 'react-icons'

export default interface InputProp extends InputHTMLAttributes<HTMLElement> {
    name: string;
    icon: React.ComponentType<IconBaseProps>;
}