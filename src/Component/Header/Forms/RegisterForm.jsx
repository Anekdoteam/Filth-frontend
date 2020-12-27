import React, {useState} from 'react';
import s from './LoginForm.css';



// Reference: https://reactjs.org/docs/forms.html
// There is probably a library that does all this, overkill for now?

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
  
  // Change values to be submitted when user changes them
  handleUsernameChange(event) {
    this.setState({username: event.target.value});
  }
  
  handlePasswordChange(event) {
    this.setState({password: event.target.value});
  }

  handleSubmit(event) {
    alert('Login attempt:\n username: ' + this.state.username + ';\n password' + this.state.password);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className={s.login}>
        <div className={s.main_form}>
                <div>
                  <input
                    type={"text"}
                    name={"username"}
                    placeholder={"Логин"}
                    onChange={this.handleLoginChange}
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
                    onChange={(event) => {
                      this.setState({password: event.target.value})
                    }}
                    className={s.in}/>
                </div>
                <div>
                  <input type={'button'} value={'Зарегистрироваться'} onClick={() => this.handleLogin(this.state.username, this.state.password)}/>
                </div>
        </div>
      </form>
    );
  }
}