import React, {useState} from 'react';
import NavBar from "./NavBar/NavBar";
import {NavLink} from "react-router-dom";
import prof from '../../assets/unauth_user_icon.svg';
import logo from '../../assets/dark.svg';
import plusIcon from '../../assets/plus_icon.svg';
import Like from "../../assets/filth-like-icon.svg";
import search from "../../assets/filth-search.svg";
import axios from "axios";
import add_s from './Add.module.css';
import s from './Header.module.css';
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

import Cookies from 'js-cookie';

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
      isLoggedIn: true/*Cookies.get('isLoggedIn')*/,
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
        <Modal show={this.state.showModalAdd} onHide={this.handleHideAdd}>
          <Modal.Dialog>
            <Modal.Header className={add_s.header}>
              <div className={add_s.head}>
                Добавить анекдот
              </div>
            </Modal.Header>
            <Modal.Body className={add_s.body}>
              <form>
                <div>
                  <div>
                    <input
                      type={"text"}
                      name={"title"}
                      placeholder={"Название"}
                      className={add_s.inline}
                      onChange={(event) => {
                        this.setState({jokeTags: event.target.value})
                      }}/>
                  </div>
                  <div>
                    {/*TODO: tags should be requested from backend (/jokes/getTags/???), then displayed as choices, also "new" should be a choice*/}
                    <input type={"text"}
                           name={"tags"}
                           placeholder={"Теги"}
                           className={add_s.inline}
                           onChange={(event) => {
                             this.setState({jokeTags: event.target.value})
                           }}/>
                  </div>
                  <div>
                      <textarea
                        name={"content"}
                        placeholder={"Анекдот"}
                        className={`${add_s.inline} ${add_s.content}`}
                        onChange={(event) => {
                          this.setState({jokeContent: event.target.value})
                        }}/>
                  </div>
                  <div>
                    <input
                      type={"submit"}
                      name={"send"}
                      value={"Опубликовать"}
                      className={add_s.button}
                      onClick={() => {
                        this.handleAddJoke(this.state.jokeTitle,
                          this.state.jokeTags,
                          this.state.jokeContent)
                      }}/>
                  </div>
                </div>
              </form>
            </Modal.Body>
            <Modal.Footer className={add_s.footer}>
              <Button variant="primary" onClick={this.handleHideAdd}/>
            </Modal.Footer>
          </Modal.Dialog>
        </Modal>
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
      <Modal show={this.state.showModalLogin} onHide={this.handleHideLogin}>
        <Modal.Dialog>
          <Modal.Header className={s.header}>
            <div className={s.head_title}>
              Вход
            </div>
          </Modal.Header>
          <Modal.Body className={s.content}>
            <form className={s.login}>
              <div className={s.main_form}>
                <div>
                  <input
                    type={"text"}
                    name={"username"}
                    placeholder={"Логин"}
                    onChange={(event) => {
                      this.setState({username: event.target.value})
                    }}
                    className={s.in}/>
                </div>
                <div>
                  <input
                    type={"password"}
                    name={"password"}
                    placeholder={"Пароль"}
                    onChange={(event) => {
                      this.setState({password: event.target.value})
                    }}
                    className={s.in}/>
                </div>
                <div>
                  <input type={"submit"} value={"Войти"}
                         onClick={() => this.handleLogin(this.state.username, this.state.password)}/>
                </div>
              </div>

            </form>
          </Modal.Body>
          <Modal.Footer className={s.footer}>
            <Button
              className={s.footer_btn}
              variant="primary"
              onClick={this.handleHideLogin}/>
          </Modal.Footer>
        </Modal.Dialog>
      </Modal>
    </header>
  );
};
}

export default Header;
