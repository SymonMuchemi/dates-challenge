function Button({type, count, setCount, steps=0}) {
    //TODO: add a comment here
    function actuator() {
        if (steps === 0 && type === 'add'){
            setCount(count + 1)
        }
        else if (steps === 0 && type !== 'add'){
            setCount(count - 1)
        }
        else if (steps !== 0 && type === 'add'){
            setCount(steps + count)
        }
        else if (steps !== 0 && type !== 'add'){
            setCount(steps - count)
        }
    }

    return (
        <button onClick={actuator}>
            {type === 'add' ? '+' : '-'}
        </button>
    );
}

export default Button;

