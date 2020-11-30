import React from "react";
import s from "../Header.module.css";
import Modal from "../../../Modal";

export default class LoginModal extends React.Component{

    render = () => {
        return (
            <LoginModal>
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
                                            <input type={"submit"} value={"Войти"} onClick={() => this.handleLogin(this.state.username, this.state.password)}/>
                                        </div>
                                    </div>

                                </form>
                            </div>
                        </div>
                    </button>
                </Modal>
            </LoginModal>
        )
    }
}