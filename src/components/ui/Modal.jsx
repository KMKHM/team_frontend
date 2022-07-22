import React from 'react';
import ReactDOM from 'react-dom';
import classes from './Modal.module.css';

const Backdrop = props => {
  return (
    <div className={classes.backdrop} onClick={props.handleChange}>
      {' '}
    </div>
  );
};

const ModalOverlay = props => {
  return (
    <div className={classes.modal} onClick={props.handleChange}>
      <div className={classes.content} onClick={props.handleChange}>
        {' '}
      </div>
    </div>
  );
};

const portalEl = document.getElementById('overlays');

const Modal = props => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onCick={props.handleChange} />,
        portalEl
      )}
      {ReactDOM.createPortal(
        <ModalOverlay onClick={props.handleChange}>hi</ModalOverlay>,
        portalEl
      )}
    </>
  );
};

export default Modal;
