import React from 'react';
import { NavLink } from 'react-router-dom';
import logoNavBar from '../../logoNavBar.png';

import style from './NavBar.module.css';


export default function NavBar() {
    
    return (
        <div className={style.gral}>
            <div className={style.logo}>
            <NavLink exact to="/">
                <img src={logoNavBar} width="50" height="50" alt='buscando Imagen' />
            </NavLink>
            </div>
            <nav>
                <div className={style.gral_list}>
                    <NavLink exact to="/videogames" className={style.link}>
                        <h3 className={style.list}>Videogames</h3>
                    </NavLink>
                    <NavLink to="/creategame" className={style.link}>
                        <h3 className={style.list}>Create</h3>
                    </NavLink>
                </div>
            </nav>
        </div>
    )
}
