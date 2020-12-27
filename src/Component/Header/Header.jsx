import React, {useState} from 'react';
import NavBar from "./NavBar/NavBar";
import {NavLink} from "react-router-dom";
import prof from '../../assets/unauth_user_icon.svg';
import profAuth from '../../assets/auth_user_icon.svg';
import logo from '../../assets/dark.svg';
import plusIcon from '../../assets/plus_icon.svg';
import Like from "../../assets/filth-like-icon.svg";
import search from "../../assets/filth-search.svg";
import add_s from './Add.module.css';
import s from './Header.module.css';
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import LoginForm from "./Forms/LoginForm"
import RegisterForm from "./Forms/RegisterForm"
import AddForm from "./Forms/AddForm"
// TODO: cleanup imports

import axios from "axios";
import Cookies from 'js-cookie';

class Header extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      showModalLogin: false,
      showModalAdd: false,
      showModalRegistration: false,
      isLoggedIn: Cookies.get('isLoggedIn'),
    };


    this.handleShowRegistration = this.handleShowRegistration.bind(this);
    this.handleHideRegistration = this.handleHideRegistration.bind(this);
    this.handleShowLogin = this.handleShowLogin.bind(this);
    this.handleHideLogin = this.handleHideLogin.bind(this);
    this.handleShowAdd = this.handleShowAdd.bind(this);
    this.handleHideAdd = this.handleHideAdd.bind(this);
  }


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

    handleShowRegistration = () => {
      this.setState({showModalRegistration: true});
    };

    handleHideRegistration = () => {
      this.setState({showModalRegistration: false});
    };
    
    logout = (username, email, password) => {
    axios({
      method: 'get',
      url: 'http://back.site-smeshnoy.me:3001/login/logout',
      withCredentials: true,
      maxRedirects: 1,
    }).then(response => {
      alert("Success: " + response.data.success
      + '\nError: ' + response.data.error
      + '\nMessage: ' + response.data.message)
      if(response.data.success==true){
        Cookies.remove("isLoggedIn");
        Cookies.remove("sampleCookie");
        Cookies.remove("sampleCookie.sig");
      }
      window.location = "/memes";
      // TODO: check success and give a message (flash?); progress bar or something?
    });
  };

render = () => {

  const addButton = this.state.isLoggedIn ?
    <div>
      <img className={s.add_logo} src={plusIcon} alt="add" onClick={this.handleShowAdd}/>
    </div> : null
    
  const profileButton = this.state.isLoggedIn ? <img onClick={() => {
                                                                    alert('Знающие люди говорят, что здесь будет профиль. У всех будет информация, кнопка логаута и все остальное. Надо только не бухтеть и не раскачивать лодку. А сейчас - тут логаут.');
                                                                    this.logout();
                                                                    }} 
                                                src={profAuth} className={s.profile_logo} alt='profile'/> :
                                                <img onClick={this.handleShowLogin} src={prof} className={s.profile_logo} alt='profile'/>

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
              <AddForm/>
            </Modal.Body>
            <Modal.Footer className={add_s.footer}>
              <Button variant="primary" onClick={this.handleHideAdd}/>
            </Modal.Footer>
          </Modal.Dialog>
        </Modal>
        {addButton}
        {profileButton}
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
            <LoginForm/>
            {this.state.isLoggedIn ? null :
                    <div>
                      <input type={'button'} value={'Зарегистрироваться'} onClick={this.handleShowRegistration}/>
                  </div>}
          </Modal.Body>
          <Modal.Footer className={s.footer}>
            <Button
              className={s.footer_btn}
              variant="primary"
              onClick={this.handleHideLogin}/>
          </Modal.Footer>
        </Modal.Dialog>
      </Modal>

      <Modal show={this.state.showModalRegistration} onHide={this.handleHideRegistration}>
        <Modal.Dialog>
          <Modal.Header className={s.header}>
            <div className={s.head_title}>
              Регистрация
            </div>
          </Modal.Header>
          <Modal.Body className={s.content}>
            <RegisterForm/>
          </Modal.Body>
          <Modal.Footer className={s.footer}>
            <Button
              className={s.footer_btn}
              variant="primary"
              onClick={this.handleHideRegistration}/>
          </Modal.Footer>
        </Modal.Dialog>
      </Modal>
    </header>
  );
};
}

export default Header;
