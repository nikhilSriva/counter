import React from 'react';
import useCounter from "../../hooks/useCounter";

const Counter: React.FC = () => {
    const {counter, pauseCounter, resetCounter, startCounter, isRunning} = useCounter(0)
    return (
        <div>
            <h1>{counter}</h1>
            <button onClick={isRunning ? pauseCounter : startCounter}>
                {isRunning ? 'Pause' : 'Start'}
            </button>
            <button onClick={resetCounter}>Reset</button>
        </div>
    );
};

export default Counter;
