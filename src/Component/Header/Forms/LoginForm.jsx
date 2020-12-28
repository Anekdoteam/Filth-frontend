import React, {useState} from 'react';
import s from './LoginForm.module.css';
import axios from "axios";
import Cookies from 'js-cookie';
import Modal from "react-bootstrap/Modal";


// Reference: https://reactjs.org/docs/forms.html
// There is probably a library that does all this, overkill for now? (nope)

export default class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };

    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  login = (username, password) => {
    axios({
      method: 'post',
      url: 'http://back.site-smeshnoy.me:3001/login',
      data: {username: username, password: password},
      withCredentials: true
    }).then(response => {
      Cookies.set("isLoggedIn", true);
      window.location = "/memes";
      // TODO: check success and give a message (flash?); progress bar or something?
    });
  };

  // Change values to be submitted when user changes them
  handleUsernameChange(event) {
    this.setState({username: event.target.value});
  }

  handlePasswordChange(event) {
    this.setState({password: event.target.value});
  }

  handleSubmit(event) {
    this.login(this.state.username, this.state.password)
    event.preventDefault();
  }

  render() {
    return (
      <form className={s.login} onSubmit={this.handleSubmit}>
        <div className={s.main_form}>
          <div className={s.main_form_item}>
            <input
              type={"text"}
              name={"username"}
              placeholder={"Логин"}
              onChange={this.handleUsernameChange}
              className={s.in}/>
          </div>
          <div className={s.main_form_item}>
            <input
              type={"password"}
              name={"password"}
              placeholder={"Пароль"}
              onChange={this.handlePasswordChange}
              className={s.in}/>
          </div>
          <div className={s.main_form_item}>
            <input type={"submit"} value={"Войти"}/>
          </div>
        </div>
      </form>
    );
  }
}