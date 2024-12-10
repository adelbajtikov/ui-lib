import "./index.css";
//size = "sm"|"md"|"lg"
export function Button(props) {
    const { size = "md", variant = "primary", children } = props;
    const className = `my-button my-button--${variant} my-button--${size}`;
    return <button className={className}>{children}</button>;
}

export function MyDiv() {
    return <div className="my-div"><span>Salam</span></div>;
}

export function YourDiv(input){
    return {}
}