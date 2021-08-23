import React, { ReactElement, ReactEventHandler, useState } from 'react';
import styled from 'styled-components';
import RadioButton from './RadioButton';

interface RadioGroupProps {
    labels: string[];
    name: string;
    onChange: (index: number) => void;
}
const RadioGroup: React.FC<RadioGroupProps> = (props) => {
    const { labels, name, onChange } = props;

    const [active, setActive] = useState(-1);

    const handleActiveChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const index = parseInt(e.target.value);
        setActive(index);
        onChange(index);
    };

    return (
        <Container>
            {labels
                ? labels.map((label: any, i: number) => (
                      <RadioButton
                          {...props}
                          key={name + i}
                          id={name + '-' + i}
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

export default RadioGroup;

const Container = styled.div`
    display: flex;
    flex-direction: column;
`;
