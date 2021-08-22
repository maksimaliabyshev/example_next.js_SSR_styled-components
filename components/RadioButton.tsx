import React from 'react';
import styled from 'styled-components';

interface IRadioButton {
    id: string;
    label: string;
}

const RadioButton = ({ id, label, ...props }: IRadioButton) => {
    return (
        <Wrapper>
            <input id={id} type="radio" {...props} />
            <label htmlFor={id}>{label}</label>
        </Wrapper>
    );
};

export default RadioButton;

const Wrapper = styled.div`
    display: flex;
    max-width: 30vw;
    max-height: 10vw;
    min-height: 40px;

    input {
        display: none;
    }

    label {
        background-color: #fff;
        color: #000;
        padding: 8px 10px;
        border-color: '#fff';
        border-width: 0px;
        border-radius: 7px;
        margin: 5px;
        cursor: pointer;
        box-shadow: 0px 1px 4px rgb(0 0 0 / 20%);
        overflow: hidden;
        align-items: center;
    }
    input:checked + label {
        cursor: default;
        background: #4c4c56;
        color: #ffffff;
    }
`;
