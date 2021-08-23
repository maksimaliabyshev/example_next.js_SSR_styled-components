import React, { FC } from 'react';
import { format } from 'date-fns-tz';

interface SvgElementProps {
    start?: Date;
    end?: Date;
    text?: string;
    height?: number;
}

const SvgElement: FC<SvgElementProps> = (props) => {
    let start = props.start && format(props.start, 'H:mm');
    let end = props.end && format(props.end, 'H:mm');
    let height = props.height;
    let text = props.text;

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="120"
            height={height || 39}
            // viewBox={'0 0 120 ' + height || 39}
            fill="none">
            <rect
                opacity="0.4"
                width="120"
                height={height || 39}
                rx="2"
                fill="#6CE37F"
            />
            <rect
                opacity="0.4"
                width="3"
                height={height || 39}
                rx="2"
                fill="#6CE37F"
            />

            <text x="8" y="16" fontSize="12" fill="#39AE4C">
                {start && end && start + ' - ' + end}
            </text>

            <foreignObject
                x="8"
                y="22"
                width="100"
                height={height || 39}
                fontSize="12"
                fontWeight="bold"
                fill="#39AE4C"
                color="#39AE4C">
                {text || ''}
            </foreignObject>
        </svg>
    );
};

export default SvgElement;
