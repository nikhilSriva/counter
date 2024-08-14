import {useCallback, useEffect, useRef, useState} from 'react';

const useCounter = (initialValue: number = 0) => {
    const [counter, setCounter] = useState(initialValue);
    const [isRunning, setIsRunning] = useState(false);
    const intervalRef = useRef<number | null>(null);

    const startCounter = useCallback(() => {
        if (!isRunning) {
            setIsRunning(true);
            intervalRef.current = setInterval(() => {
                setCounter((prevCounter) => prevCounter + 1);
            }, 1000);
        }
    }, [isRunning])

    const pauseCounter = useCallback(() => {
        if (isRunning && intervalRef.current) {
            clearInterval(intervalRef.current);
            setIsRunning(false);
        }
    }, [isRunning])

    const resetCounter = useCallback(() => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
        }
        setCounter(initialValue);
        setIsRunning(false);
    }, [initialValue])

    useEffect(() => {
        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
        };
    }, []);

    return {counter, isRunning, startCounter, pauseCounter, resetCounter};
};

export default useCounter;
