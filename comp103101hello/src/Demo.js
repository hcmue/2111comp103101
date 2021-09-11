import React from 'react';

export const Hello = (props) => {
    return (
        <div style={{ border: '1px solid blue', padding: 5 }}>
            <h2>Hello: {props.name}</h2>
            <h3>Age: {props.age}</h3>
        </div>
    )
};
