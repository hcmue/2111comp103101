import React, { useContext, useEffect } from 'react';
import { MyContext } from '../context/MyContext';

export const MyCard = React.memo(({ name, gender }) => {
    useEffect(() => {
        console.log('Render MyCard')
    });
    return (
        <div>
            <h3>My name: {name}</h3>
            <h4>Gender: {gender}</h4>
        </div>
    )
});

// Arrow Function components
export const About = () => {
    const { count, setCount } = useContext(MyContext);

    return (
        <div>
            <h2>GIỚI THIỆU</h2>
            <h4>REACT JS + MATERIAL UI + FAST API</h4>
            <button onClick={() => setCount(count + 1)}>Tăng đếm</button>
            <h3>COUNT: {count}</h3>
            <MyCard name="HIENLTH" gender="male" />
        </div>
    )
};
