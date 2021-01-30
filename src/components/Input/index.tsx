import React, { InputHTMLAttributes } from 'react';
import styled from 'styled-components'
import InputProp from '../../components_interfaces/input'



const Input: React.FC<InputProp> = ({icon: Icon, ...rest}) => {
    return (
    <Container>
        {Icon && <Icon size={23} color="#000000"/>}
        <input {...rest}/>
    </Container>
    );
}

const Container = styled.div`
    backgroud: #232129;
    border-radius: 10px;
    border: 2px solid #232129;
    padding: 16px;
    width: 100%;
    color: #000000;
    display: flex;
    align-items: center;

    & + div {
        margin-top: 8px;
    }

    input {
        background: transparent;
        border: 0;
        flex: 1;
    }
    svg {
        margin-right: 16px;
    }
`;
export default Input;