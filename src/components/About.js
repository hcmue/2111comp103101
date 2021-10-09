import React, { useContext } from 'react';
import { MyContext } from '../context/MyContext';

// Arrow Function components
export const About = () => {
    const { count } = useContext(MyContext);

    return (
        <div>
            <h2>GIỚI THIỆU</h2>
            <h4>REACT JS + MATERIAL UI + FAST API</h4>
            <h3>COUNT: {count}</h3>
        </div>
    )
};
