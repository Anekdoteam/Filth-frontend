import React, {useState} from 'react';
import s from './LoginForm.module.css';
import axios from "axios";
import Cookies from 'js-cookie';


// Reference: https://reactjs.org/docs/forms.html
// There is probably a library that does all this, overkill for now?

export default class RegisterForm extends React.Component {
  constructor(props) {  
    super(props);
    this.state = {
      username: "",
      email: "",
      password: "",
      passwordRepeat: "",
    };

    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handlePasswordRepeatChange = this.handlePasswordRepeatChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  register = (username, email, password) => {
    axios({
      method: 'post',
      url: 'http://back.site-smeshnoy.me:3001/register',
      data: {username: username, password: password, email: email},
      withCredentials: true
    }).then(response => {
      //Cookies.set("isLoggedIn",true);
      //window.location = "/memes";
      // TODO: check success and give a message (flash?); progress bar or something?
    });
  };
  
  
  // Change values to be submitted when user changes them
  handleUsernameChange(event) {
    this.setState({username: event.target.value});
  }
  handleEmailChange(event) {
    this.setState({email: event.target.value});
  }
  
  handlePasswordChange(event) {
    this.setState({password: event.target.value});
  }  
  
  handlePasswordRepeatChange(event) {
    this.setState({passwordRepeat: event.target.value});
  }

  handleSubmit(event) {
    // TODO: give nice messages, do validation react-way
    if(this.state.password=="" || this.state.passwordRepeat=="" || this.state.email==""  || this.state.username==""){
        alert("Одно из полей пустое!");
    } else{
        if(this.state.password==this.state.passwordRepeat){
            this.register(this.state.username, this.state.email, this.state.password)
        } else{
            alert("Пароли не совпадают!")
        }
    }
    event.preventDefault();
  }

  render() {
    return (
      <form className={s.login} onSubmit={this.handleSubmit}>
              <div className={s.main_form}>
                <div>
                  <input
                    type={"text"}
                    name={"username"}
                    placeholder={"Логин"}
                    onChange={this.handleUsernameChange}
                    className={s.in}/>
                </div>
                <div>
                  <input
                    type={"text"}
                    name={"email"}
                    placeholder={"Почта"}
                    onChange={this.handleEmailChange}
                    className={s.in}/>
                </div>
                <div>
                  <input
                    type={"password"}
                    name={"password"}
                    placeholder={"Пароль"}
                    onChange={this.handlePasswordChange}
                    className={s.in}/>
                </div>
                <div>
                  <input
                    type={"password"}
                    name={"password_same"}
                    placeholder={"Повторите пароль"}
                    onChange={this.handlePasswordRepeatChange}
                    className={s.in}/>
                </div>
                <div>
                  <input type={'submit'} value={'Зарегистрироваться'}/>
                </div>
              </div>
        </form>
    );
  }
}