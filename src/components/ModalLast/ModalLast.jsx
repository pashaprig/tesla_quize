import React from 'react';
import s from './ModalLast.module.scss';
import { ReactComponent as IconCheck } from './../../img/check.svg';
import { ReactComponent as IconStatusBar99 } from './../../img/iconStatusBar99.svg';

const ModalLast = (props) => {
  return (
    <div className={s.modalWrapper}>
      <p className={s.description}>{props.data.description_end}</p>
      <p className={s.title}>Нажмите<span className='contentColor'> {props.data.button_text_end}</span>, чтобы зарегистрироваться на платформе Tesla</p>

      <div className={s.modalBottom}>
        <IconStatusBar99 className={s.statusBar} width='35' height='35' aria-label='Иконка StatusBar' />
        <span className={s.modalBottomPercent}>99 из 100%</span>
        <a href='https://r.oldcrm.site/tesla+pl/tesla_new/?sp=103'>{props.data.button_text_end}<IconCheck className={s.iconCheck} width='12' height='12' alt='Иконка Check' /></a>
      </div>
    </div>
  );
}

export default ModalLast;
