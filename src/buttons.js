function Button({type, count, setCount}) {
    function actuator() {
        type === 'add' ? setCount(count + 1) : setCount(count - 1)
    }
    return (
        <button onClick={actuator}>
            {type === 'add' ? '+' : '-'}
        </button>
    );
}

export default Button;

