import React from "react";
import './NavBar.css';
import navBarLogo from '~/../../src/assets/navBarLogo.gif';
import { CartWidget } from '../CartWidget/CartWidget.js';
import { NavLink } from 'react-router-dom';

export function NavBar() {
    return(
        <nav className='navbar navbar-expand-lg navbar-light bg-light'>
            <NavLink to="/">
                <img alt='logo' className='navLogo' src={navBarLogo}></img>
            </NavLink>
            <NavLink className="navbar-brand tittle" to="/">Tienda de calculadoras</NavLink>

            <ul className='navbar-nav mr-auto'>
                <li className='nav-item'>
                    <NavLink exact activeClassName="activo" to="/category/1" className="nav-link">Casio</NavLink>
                </li>
                <li className='nav-item'>
                    <NavLink exact activeClassName="activo" to="/category/2" className="nav-link">Helect</NavLink>
                </li>
                <li className='nav-item'>
                    <NavLink exact activeClassName="activo" to="/category/3" className="nav-link">HP</NavLink>
                </li>
            </ul>
            
            <NavLink to="/cart">
                <CartWidget/>
            </NavLink>
        </nav>
    )
}