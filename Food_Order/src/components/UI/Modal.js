import classes from './Modal.module.css';
import React, {Fragment} from "react";
import ReactDOM from "react-dom";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClose}></div>
}

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content} onClick={props.onClose} >{props.children}</div>
    </div>
  );
}

const Modal = (props) => {
  const portalEl = document.getElementById('overlays');
  return (
      <Fragment>
        {ReactDOM.createPortal(<Backdrop onClose={props.onModalHide} />, portalEl)}
        {ReactDOM.createPortal(<ModalOverlay onClose={props.onModalHide} >{props.children}</ModalOverlay>, portalEl)}
      </Fragment>
  );
}

export default Modal;