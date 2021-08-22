import React, { ReactElement, ReactEventHandler, useState } from 'react';
import styled from 'styled-components';
import RadioButton from './RadioButton';

interface Props {
    labels: string[];
    onChange: React.FC<string>;
    name: string;
    // checked: boolean;
    [anyProps: string]: any;
}
const RadioGroupButtons: React.FC<Props> = (props) => {
    const { labels } = props;

    const [active, setActive] = useState(-1);

    const handleActiveChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setActive(parseInt(value));
        props.onChange(value);
    };

    return (
        <Container>
            {labels
                ? labels.map((label: any, i: number) => (
                      <RadioButton
                          {...props}
                          key={props.name + i}
                          id={props.name + '-' + i}
                          checked={active == i}
                          onChange={handleActiveChange}
                          label={label}
                          value={i}
                      />
                  ))
                : 'loading...'}
        </Container>
    );
};

export default RadioGroupButtons;

const Container = styled.div`
    /* height: 100%; */
    display: flex;
    /* align-items: center; */
    /* justify-content: center; */
    flex-direction: column;
`;
