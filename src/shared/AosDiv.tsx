interface AosProps {
    animName: string;
    children: JSX.Element;
    duration?: number;
    delay?: number;
}

const AosDiv = (props: AosProps) => {
    const { duration = 300, delay = 0 } = props;
    return (
        <div
            data-aos={props.animName}
            data-aos-duration={duration}
            data-aos-delay={delay}
        >
            {props.children}
        </div>
    );
}

export default AosDiv;
