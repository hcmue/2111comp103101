import React from 'react';

export const RectangleStats = (props) => {
    const { rectangle } = props;
    const { width, height, area } = rectangle;
    return (
        <div className="rectangle-stats">
            <div>Width: {width}</div>
            <div>Height: {height}</div>
            <div>Area: {area}</div>
        </div>
    )
};
