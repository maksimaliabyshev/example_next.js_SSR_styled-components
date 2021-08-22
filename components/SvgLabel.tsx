interface SvgLabelProps {
    start?: Date;
    end?: Date;
    text?: string;
    height?: number;
};

const SvgLabel = (props: SvgLabelProps) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="120"
            height={props.height || 39}
            viewBox="0 0 120 {props.height || 39}"
            fill="none">
            <rect
                opacity="0.4"
                width="120"
                height={props.height || 39}
                rx="2"
                fill="#6CE37F"
            />
            <rect
                opacity="0.4"
                width="3"
                height={props.height || 39}
                rx="2"
                fill="#6CE37F"
            />

            <text x="8" y="16" fontSize="12" fill="#39AE4C">
                {props.start} - {props.end}
            </text>

            <foreignObject
                x="8"
                y="22"
                width="100"
                height={props.height || 39}
                fontSize="12"
                fontWeight="bold"
                fill="#39AE4C"
                color="#39AE4C">
                {props.text}
            </foreignObject>
        </svg>
    );
}

export default  SvgLabel