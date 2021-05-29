import React from "react";
import './NavBar.css';
import navBarLogo from '~/../../src/assets/navBarLogo.gif';

export function NavBar() {
    return(
        <nav className='navbar navbar-expand-lg navbar-light bg-light'>
            <img alt='logo' className='navLogo' src={navBarLogo}></img>
            <a className="navbar-brand tittle">Tienda de calculadoras</a>

            <ul className='navbar-nav mr-auto'>
                <li className='nav-item'>
                    <a className='nav-link' href='https://www.youtube.com/watch?v=dQw4w9WgXcQ'>Ofertas de la semana</a>
                </li>
                <li className='nav-item'>
                    <a className='nav-link' href='#'>Casio</a>
                </li>
                <li className='nav-item'>
                    <a className='nav-link' href='#'>Helect</a>
                </li>
                <li className='nav-item'>
                    <a className='nav-link' href='#'>HP</a>
                </li>
            </ul>
        </nav>
    )
}