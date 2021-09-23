import React from 'react';
import s from './Modal.module.scss';

import Form from '../Form/Form';

const Modal = () => {
  return (
    <div className={s.modalWrapper}>
      <Form />
    </div>
  );
}

export default Modal;