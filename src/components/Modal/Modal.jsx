import React from 'react';
import Form from './Form/Form';
import s from './Modal.module.css';
import ModalBottom from './ModalBottom/ModalBotton';

const Modal = () => {
  return (
    <section className={s.modalWrapper}>
      <div className={s.title}>
        <span>1 <img src='https://r.oldcrm.site/tesla+pl/pl(quiz)/img/icon-arrow_right.svg' alt=''></img></span>
        <span>Вы раньше инвестировали в проекты <span className='contentColor'>Tesla </span> ?</span>
      </div>
      <Form />
      <ModalBottom />
    </section>
  );
}

export default Modal;