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
import LoginModal from "./Modals/LoginModal";
import AddModal from "./Modals/AddModal";

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
            user: document.cookie.sampleCookie,
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
            <LoginModal/>
        ) : this.state.showModalAdd ? (
            // TODO: this
            <AddModal/>
        ) : null;

        const addButton = this.state.user ?
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