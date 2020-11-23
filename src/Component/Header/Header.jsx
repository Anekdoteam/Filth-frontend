import React from 'react';
import s from './Header.module.css';
import add_s from './Add.module.css';
import prof from '../../assets/unauth_user_icon.svg';
import logo from '../../assets/dark.svg';
import plusIcon from '../../assets/plus_icon.svg';
import NavBar from "./NavBar/NavBar";
import {NavLink} from "react-router-dom";
import ReactDOM from "react-dom";
import Like from "../../assets/filth-like-icon.svg";
import search from "../../assets/filth-search.svg";
import axios from "axios";

const modalRoot = document.getElementById('modal-root');

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
}

class Header extends React.Component {

    constructor(props) {
        super(props);
        this.state = {showModalLogin: false};
        this.state = {showModalAdd: false};
        this.state = {apiResponse: {success: false, error: undefined}};
        this.state = {jokeTitle: ""};
        this.state = {jokeTags: []};
        this.state = {jokeContent: ""};
        
        
        this.handleShowLogin = this.handleShowLogin.bind(this);
        this.handleHideLogin = this.handleHideLogin.bind(this);
        this.handleShowAdd = this.handleShowAdd.bind(this);
        this.handleHideAdd = this.handleHideAdd.bind(this);
        
    }
    
    addJoke(jokeName, jokeTags, jokeContent) {
        
        axios({
          method: 'post',
          url: 'http://localhost:3001/jokes/addJoke',
          data: {name: jokeName, tags: jokeTags, content: jokeContent},
          maxRedirects: 1
        }).then(response => {
            this.setState({apiResponse: response.data});
          });
  }

    handleShowLogin() {
        this.setState({showModalLogin: true});
    }

    handleHideLogin() {
        this.setState({showModalLogin: false});
    }

    handleShowAdd() {
        this.setState({showModalAdd: true});
    }

    handleHideAdd() {
        this.setState({showModalAdd: false});
    }
    
    handleAddJoke(name, tags, content) {
        this.addJoke(name, tags, content);
        /*Todo: success/failure message*/
        /*Todo: probably should redirect to different pages when categories are in place; currently is bugged and redirects to backend?*/
    }

    render() {
        const modal = this.state.showModalLogin ? (
            <Modal>
                <button>
                    <div className={s.modal}>
                        <div className={s.modal_text}>
                            <form action={"/login"} method={"post"} className={s.login}>
                                <div className={s.head}>
                                    Вход
                                </div>
                                <div className={s.main_form}>
                                    <div>
                                        {/*<label>Username</label>*/}
                                        <input type={"text"} name={"username"} placeholder={"Логин"} className={s.in}/>
                                    </div>
                                    <div>
                                        {/*<label>Password</label>*/}
                                        <input type={"password"} name={"password"} placeholder={"Пароль"}
                                               className={s.in}/>
                                    </div>
                                    <div>
                                        <input type={"submit"} value={"Войти"} onClick={this.handleHide}/>
                                    </div>
                                </div>

                            </form>
                        </div>
                        {/*<div className="modal_text">
                            With a portal, we can render content into a different
                            part of the DOM, as if it were any other React child.
                        </div>*/}
                    </div>
                </button>
            </Modal>
        ) : this.state.showModalAdd ? (
            // TODO: this
            <Modal>
                <button>
                    <div className={add_s.modal}>
                        <div className={add_s.modal_text}>
                            <form action={"http://localhost:3001/addJoke/"} method={"post"} className={add_s.login}>
                                <div className={add_s.head}>
                                    Добавить анекдот
                                </div>
                                <div className={add_s.main_form}>
                                    <div>
                                        <input type={"text"} name={"title"} placeholder={"Название"} className={add_s.inline} onChange={ (event)=> {this.state.jokeTitle = event.target.value}}/>
                                    </div>
                                    <div>
                                    {/*TODO: tags should be requested from backend (/jokes/getTags/???), then displayed as choices, also "new" should be a choice*/}
                                        <input type={"text"} name={"tags"} placeholder={"Теги"} className={add_s.inline}  onChange={ (event)=> {this.state.jokeTags = event.target.value}}/>
                                    </div>
                                    <div>
                                        <textarea type={"text"} name={"content"} placeholder={"Анекдот"} className={`${add_s.inline} ${add_s.content}`}  onChange={ (event)=> {this.state.jokeContent = event.target.value}}/>
                                    </div>
                                    <div>
                                        <input type={"submit"} name={"send"} value={"Опубликовать"} onClick={() => {this.handleAddJoke(this.state.jokeTitle,
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
                    <div>
                        <img className={s.add_logo} src={plusIcon} alt="add" onClick={this.handleShowAdd}/>
                    </div>
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
    }
}

export default Header;