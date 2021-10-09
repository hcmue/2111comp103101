import React, { useEffect, useState } from 'react';

export const Counter = () => {
    const [counter, setCounter] = useState(0);
    const decrease = () => {
        setCounter(counter - 1);
    };

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
    }, [counter]);

    return (
        <>
            <h2>COUNTER - Value: {counter}</h2>
            <div>
                <button onClick={() => {
                    setCounter(counter + 1);
                }}>+</button>
                <button onClick={decrease}>-</button>
            </div>
        </>
    )
};
