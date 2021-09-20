import React from 'react';
import s from './Modal.module.scss';
import Form from './../Form/Form';
import ModalBottom from './../ModalBottom/ModalBottom';

const Modal = () => {
  return (
    <section className={s.modalWrapper}>
      <div className={s.title}>
        <span className='contentColor'>1 <img src='https://r.oldcrm.site/tesla+pl/pl(quiz)/img/icon-arrow_right.svg' alt=''></img></span>
        <span>Вы раньше инвестировали в проекты <span className='contentColor'>Tesla </span> ?</span>
      </div>
      <Form />
      <ModalBottom />
    </section>
  );
}

export default Modal;