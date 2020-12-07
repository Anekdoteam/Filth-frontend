import React from 'react';
import s from './Block.module.css';
import ReactDOM from "react-dom";
import prof from "../../../assets/unauth_user_icon.svg";
import Like from "../../../assets/filth-like-icon.svg";

const modalRoot = document.getElementById('modal-root');

let tagList = ["#sometag1", "#sometag2", "#sometag3", "#sometag4", "#sometag5"];

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

class Block extends React.Component {
    constructor(props) {
        super(props);
        this.state = {showModal: false};

        this.handleShow = this.handleShow.bind(this);
        this.handleHide = this.handleHide.bind(this);

    }

    handleShow() {
        this.setState({showModal: true});
    }

    handleHide() {
        this.setState({showModal: false});
    }

    render() {
        const modal = this.state.showModal ? (
            <Modal>
                <button onClick={this.handleHide} className={"fullBtn"}>
                    <div className="modal">
                        <div className="modal_text">
                            <h4>
                                {this.props.title}
                            </h4>
                            <br/>
                            <br/>
                            <p>
                                {this.props.content}
                            </p>
                            <div className={s.tag_line}>
                                {tagList.map(key => {
                                    return (
                                        <span key={key}>
                                            {key}
                                        </span>
                                    )
                                })}
                            </div>
                            <div>
                                <div className={s.user_info}>
                                    <img
                                         src={prof}
                                         className={s.profile_logo}
                                         alt='profile'
                                    />
                                    <div className={s.user_name}>
                                        {/*this.props.author*/}
                                        <p>
                                            Temp user name
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </button>
            </Modal>
        ) : null;

        return (
            <div className={s.block} style={this.props.style}>
                <button className={s.btn} onClick={this.handleShow}>
                    <div className={s.btn_text}>
                        <h4>
                            {this.props.title}
                        </h4>
                        <br/>
                        <p>
                            {this.props.content}
                        </p>
                        {/*TODO: make this beautiful*/}
                        <img className={s.like_button} src={Like} alt="like" onClick={this.handleLike}/>
                    </div>
                </button>
                {modal}
            </div>
        );

    }
}

export default Block;