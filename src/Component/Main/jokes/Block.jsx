import React, { useState } from "react";
import s from "./Block.module.css";
import modal_s from "./Block_Modal.module.css";
import prof from "../../../assets/unauth_user_icon.svg";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

let tagList = ["sometag1", "sometag2", "sometag3", "sometag4", "sometag5"];

const Block = props => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <div className={s.block}>
        <button className={s.btn} onClick={handleShow}>
          <div className={s.btn_text}>
            <h4>{props.title}</h4>
            <br />
            <p>{props.content}</p>
          </div>
        </button>
      </div>
      <Modal
        show={show}
        onHide={handleClose}
        aria-labelledby="title"
        dialogClassName="joke-modal"
      >
        <Modal.Dialog className={modal_s.dialog}>
          <Modal.Header className={modal_s.header}>
            <Modal.Title id={"title"} className={modal_s.title}>
              {props.title}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body className={modal_s.content}>
            <div className={modal_s.text}>{props.content}</div>
            <div className={modal_s.author}>
              <p className={modal_s.tag_line}>
                {tagList.map(key => {
                  return (
                    <div className={s.tag} key={key}>
                      #<span className={s.white}>{key}</span>
                    </div>
                  );
                })}
              </p>
              {/*<br/>*/}
              {/*<br/>*/}
              {/*<br/>*/}
              <div className={modal_s.user_info}>
                <img
                  src={prof}
                  className={modal_s.profile_logo}
                  alt="profile"
                />
                <div className={modal_s.user_name}>
                  {/*this.props.author*/}
                  Temp user name
                </div>
              </div>
            </div>
            <hr className={modal_s.hr} />
            <div className={modal_s.comment}>
              <div>logo</div>
              <div className={modal_s.comment_nick} />
              <div className={modal_s.comment_body} />
              <div className={modal_s.like} />
              <div className={modal_s.comment_inner} />
            </div>
          </Modal.Body>
          <Modal.Footer className={modal_s.footer}>
            <Button variant="primary" onClick={handleClose} />
          </Modal.Footer>
        </Modal.Dialog>
      </Modal>
    </div>
  );
};

export default Block;
