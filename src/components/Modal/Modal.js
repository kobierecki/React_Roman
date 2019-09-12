import React from 'react';
import styles from './Modal.module.scss';
import { MDBCloseIcon } from 'mdbreact';
import Form from '../Form/Form';


const Modal = ({ closeModalFn }) => (
    <div className={styles.wrapper}>
        <MDBCloseIcon className={styles.btn__close} onClick={closeModalFn} />
        <Form />
    </div>
);

export default Modal;