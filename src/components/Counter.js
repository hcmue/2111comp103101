import React, { useContext, useEffect, useState } from 'react';
import { MyContext } from '../context/MyContext';

export const Counter = () => {
    const [counter, setCounter] = useState(0);
    const decrease = () => {
        setCounter(counter - 1);
    };
    const { count, setCount } = useContext(MyContext);

    // No dependency ==> Always called : Luôn được gọi khi thay đổi state
    useEffect(() => {
        console.log('State change');

        // Clean up: được gọi trước khi re-render
        return () => {
            console.log('Clean up!!!')
        };
    });

    // Dependency dạng [] (empty array) : Được gọi lần đầu tiên
    useEffect(() => {
        console.log('First load log');

        return () => {
            console.log('Clean up for first load!!!')
        };
    }, []);

    // Theo state
    useEffect(() => {
        console.log('Counter change');
        setCount(counter);
    }, [counter, setCount]);

    return (
        <>
            <h2>COUNTER - Value: {counter}</h2>
            <h3>COUNT (context): {count}</h3>
            <div>
                <button onClick={() => {
                    setCounter(counter + 1);
                }}>+</button>
                <button onClick={decrease}>-</button>
            </div>
        </>
    )
};
