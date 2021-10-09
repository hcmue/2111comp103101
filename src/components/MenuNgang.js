import React from 'react';
import { Link } from 'react-router-dom';
import { routes } from '../config/routes';

// Arrow Function components
export const MenuNgang = () => {
    return (
        <div>
            {/* <Link to="/" className="menuItem">Home</Link>
            <Link to="/about" className="menuItem">About</Link>
            <Link to="/todo" className="menuItem">TODO List</Link> */}
            {routes.map((item) => (
                <Link key={item.path} to={item.path} className="menuItem">{item.label}</Link>
            ))}
        </div>
    )
};
