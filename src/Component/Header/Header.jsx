import React from 'react';
import s from './Header.module.css';
import prof from './Abstract_user_icon.svg';
import logo from './dark.svg';
import NavBar from "./NavBar/NavBar";
import {NavLink} from "react-router-dom";

const Header = () => {
    return(
        <header>
            <img
                src={logo}
                className={s.logo}
                alt='logo'
            />
            <NavLink to={'/profile'}>
                <img
                    src={prof}
                    className={s.profile_logo}
                    alt='profile'
                />
            </NavLink>
            <NavBar/>
        </header>
    );
}

export default Header;