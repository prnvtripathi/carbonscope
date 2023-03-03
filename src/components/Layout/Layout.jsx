import React, { useState } from 'react';
import './Layout.css'
import { Outlet, NavLink } from "react-router-dom";

const Layout = () => {
    const [expanded, setExpanded] = useState(false)

    return (
        <>
            <nav>
                <input id="toggle" type="checkbox" onClick={() => {
                    setExpanded(!expanded)
                }} />

                <label htmlFor="toggle" className="hamburger">
                    <div className="top-bun"></div>
                    <div className="meat"></div>
                    <div className="bottom-bun"></div>
                </label>
                <div className='brand'>
                    <a href='/'>CarbonScope</a>
                </div>
                <ul className={expanded ? "expanded" : ""}>
                    <li>
                        <NavLink to="/" className='nav-links' activeClassName='active'>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about" className='nav-links' activeClassName='active'>About</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact" className='nav-links' activeClassName='active'>Contact Us</NavLink>
                    </li>
                </ul>
            </nav>

            <Outlet />
        </>
    )
};

export default Layout;