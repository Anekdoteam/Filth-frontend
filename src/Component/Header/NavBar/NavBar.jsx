import React from 'react';
import s from './NavBar.module.css';
import {NavLink} from "react-router-dom";

const NavBar = () => {
    return (
        <nav>
            <hr className={s.hr}/>
            <div className={s.navbar}>
                <div className={s.left}>
                    <div className={s.item}>
                        <NavLink to="/memes" activeClassName={s.active}>Мемы</NavLink>
                    </div>
                    <div className={s.item}>
                        <NavLink to="/jokes" activeClassName={s.active}>Анекдоты</NavLink>
                    </div>
                    <div className={s.item}>
                        <NavLink to="/past" activeClassName={s.active}>Паста</NavLink>
                    </div>
                    <div className={s.item}>
                        <NavLink to="/story" activeClassName={s.active}>Истории</NavLink>
                    </div>
                </div>
                <div className={s.rand}>
                    <div className={s.item}>
                        <NavLink to="/random" activeClassName={s.active}>Рандом</NavLink>
                    </div>
                </div>
            </div>
            {/*<ul className={s.navbar}>
                <div className={s.left}>
                    <li className={s.item}>
                        <NavLink to="/memes" activeClassName={s.active}>Мемы</NavLink>
                    </li>
                    <li className={s.item}>
                        <NavLink to="/jokes" activeClassName={s.active}>Анекдоты</NavLink>
                    </li>
                    <li className={s.item}>
                        <NavLink to="/past" activeClassName={s.active}>Паста</NavLink>
                    </li>
                    <li className={s.item}>
                        <NavLink to="/story" activeClassName={s.active}>Истории</NavLink>
                    </li>
                </div>
                <div className={s.rand}>
                    <li className={s.item} style={{float: "right"}}>
                        <NavLink to="/random" activeClassName={s.active}>Рандом</NavLink>
                    </li>
                </div>
            </ul>*/}
        </nav>
    );
}

export default NavBar;