import React from 'react';
import s from './Header.module.css';
import prof from '../../assets/unauth_user_icon.svg';
import logo from '../../assets/dark.svg';
import plusIcon from '../../assets/plus_icon.svg';
import NavBar from "./NavBar/NavBar";
import {NavLink} from "react-router-dom";
import Like from "../../assets/filth-like-icon.svg";
import search from "../../assets/filth-search.svg";
import axios from "axios";
import add_s from './Add.module.css';
import LoginModal from "./Modals/LoginModal";
import AddModal from "./Modals/AddModal";
import Modal from "../../Modal";

import Cookies from 'js-cookie';

/*const modalRoot = document.getElementById('modal-root');

class Modal extends React.Component {
    constructor(props) {
        super(props);
        this.el = document.createElement('div');
    }

    componentDidMount() {
        modalRoot.appendChild(this.el);
    }

    componentWillUnmount() {
        modalRoot.removeChild(this.el);
    }

    render() {
        return ReactDOM.createPortal(
            this.props.children,
            this.el,
        );
    }
}*/

class Header extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            showModalLogin: false,
            showModalAdd: false,
            apiResponse: {success: false, error: undefined},
            jokeTitle: "",
            jokeTags: [],
            jokeContent: "",
            username: "",
            password: "",
            isLoggedIn: Cookies.get('isLoggedIn'),
        };
        
        
        this.handleShowLogin = this.handleShowLogin.bind(this);
        this.handleHideLogin = this.handleHideLogin.bind(this);
        this.handleShowAdd = this.handleShowAdd.bind(this);
        this.handleHideAdd = this.handleHideAdd.bind(this);
        
    }
    
    addJoke = (jokeName, jokeTags, jokeContent) => {

        axios({
          method: 'post',
          url: 'http://back.site-smeshnoy.me:3001/jokes/addJoke',
          data: {name: jokeName, tags: jokeTags, content: jokeContent},
          maxRedirects: 1
        }).then(response => {
            this.setState({apiResponse: response.data});
          });
    };
    
    login = (username, password) => {

        axios({
          method: 'post',
          url: 'http://back.site-smeshnoy.me:3001/login',
          data: {username: username, password: password},
          withCredentials: true
        }).then(response => {
            this.setState({apiResponse: response.data});
            this.setState({isLoggedIn: true});
            Cookies.set("isLoggedIn",true);
            console.log("Logged in");
            // TODO: check success
          });
    };

    handleShowLogin = () => {
        this.setState({showModalLogin: true});
    };

    handleHideLogin = () => {
        this.setState({showModalLogin: false});
    };

    handleShowAdd = () => {
        this.setState({showModalAdd: true});
    };

    handleHideAdd = () => {
        this.setState({showModalAdd: false});
    };
    
    handleAddJoke = (name, tags, content) => {
        this.addJoke(name, tags, content);
        //window.location = '/memes';
        /*Todo: success/failure message (flash?)*/
        /*Todo: probably should redirect to different pages when categories are in place*/
    };
    
    handleLogin = (username, password) => {
        this.login(username, password);
        // window.location = '/memes';
    };

    render = () => {
        const modal = this.state.showModalLogin ? (
            <Modal>
                <button>
                    <div className={s.modal}>
                        <div className={s.modal_text}>
                            <form className={s.login}>
                                <div className={s.head}>
                                    Вход
                                </div>
                                <div className={s.main_form}>
                                    <div>
                                        {/*<label>Username</label>*/}
                                        <input type={"text"} name={"username"} placeholder={"Логин"} onChange={ (event)=> {this.setState({username: event.target.value})}}
                                               className={s.in}/>
                                    </div>
                                    <div>
                                        {/*<label>Password</label>*/}
                                        <input type={"password"} name={"password"} placeholder={"Пароль"} onChange={ (event)=> {this.setState({password: event.target.value})}}
                                               className={s.in}/>
                                    </div>
                                    <div>
                                        {/*TODO: fix bug: enter key doesn't count as a click, but triggers submit -> refresh*/}
                                        <input type={"submit"} value={"Войти"} onClick={() => this.handleLogin(this.state.username, this.state.password)}/>
                                    </div>
                                </div>

                            </form>
                        </div>
                    </div>
                </button>
            </Modal>
        ) : this.state.showModalAdd ? (
            // TODO: this
            <Modal>
                <button>
                    <div className={add_s.modal}>
                        <div className={add_s.modal_text}>
                            <form>
                                <div className={add_s.head}>
                                    Добавить анекдот
                                </div>
                                <div className={add_s.main_form}>
                                    <div>
                                        <input
                                            type={"text"}
                                            name={"title"}
                                            placeholder={"Название"}
                                            className={add_s.inline}
                                            onChange={ (event)=>
                                            {this.setState({jokeTags: event.target.value})}}/>
                                    </div>
                                    <div>
                                        {/*TODO: tags should be requested from backend (/jokes/getTags/???), then displayed as choices, also "new" should be a choice*/}
                                        <input type={"text"}
                                               name={"tags"}
                                               placeholder={"Теги"}
                                               className={add_s.inline}
                                               onChange={ (event)=>
                                               {this.setState({jokeTags: event.target.value})}}/>
                                        {/*<div>
                                                <button/>
                                                <div>
                                                    <input/>
                                                    <button>tag</button>
                                                </div>
                                            </div>*/}
                                        {/*<select id={"jokes"}>
                                                <optgroup label={"tags"}>
                                                    TODO: get joke-tags to jokeArray
                                                    {
                                                        () => this.state.jokeTags.map(tag => <option value={tag}/>)
                                                    }
                                                    {() => <option id="new" value={"new"}/>}
                                                    {this.#createNewTag}
                                                </optgroup>
                                            </select>*/}
                                    </div>
                                    <div>
                                        <textarea
                                            name={"content"}
                                            placeholder={"Анекдот"}
                                            className={`${add_s.inline} ${add_s.content}`}
                                            onChange={ (event)=> {this.setState({jokeContent: event.target.value})}}/>
                                    </div>
                                    <div>
                                        <input 
                                            type={"submit"}
                                            name={"send"}
                                            value={"Опубликовать"}
                                            onClick={() => {this.handleAddJoke(this.state.jokeTitle,
                                            this.state.jokeTags,
                                            this.state.jokeContent)}}/>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </button>
            </Modal>
        ) : null;

        const addButton = this.state.isLoggedIn ?
            <div>
                <img className={s.add_logo} src={plusIcon} alt="add" onClick={this.handleShowAdd}/>
            </div> : null


        return (
            <header>
                <div className={s.dashboard}>
                    <NavLink to="/">
                        <img
                            src={logo}
                            className={s.logo}
                            alt='logo'
                        />
                    </NavLink>
                    <div className={s.search_wrapper}>
                        <div className={s.search_div}>
                            <img className={s.search_icon} src={search} alt="search"/>
                            <input className={s.search} type="text" placeholder="Поиск..."/>
                        </div>
                    </div>
                    <div>
                        <img className={s.like_button} src={Like} alt="like" onClick={null}/>
                    </div>
                        {addButton}
                    <div>
                        <img onClick={this.handleShowLogin}
                             src={prof}
                             className={s.profile_logo}
                             alt='profile'
                        />
                    </div>
                </div>
                <NavBar/>
                {modal}
            </header>
        );
    };
}

export default Header;