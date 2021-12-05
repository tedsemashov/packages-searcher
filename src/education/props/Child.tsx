interface ChildProps {
    color: string,
    onClick: () => void;
}

export const Child: React.FC<ChildProps> = ({ color, onClick, children }) => {
    return <div>
        Hi here!{color}
        <button onClick={onClick}>Click me</button>
        {children}
    </div>
};