import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './ModalBottom.module.scss';
import { ReactComponent as IconArrow } from './../../img/iconArrow.svg';
import { ReactComponent as IconStatusBar0 } from './../../img/iconStatusBar0.svg';

const ModalBottom = (props) => {
  return (
    <div className={s.modalBottom}>
      <IconStatusBar0 width='20' height='20' aria-label='Иконка StatusBar' />
      <span className={s.modalBottomPercent}>0 из 100%</span>
      <NavLink className='submit' id='submit' to='/modalLast'>Далее<IconArrow className={s.iconArrow} width='20' height='20' aria-label='Стрелка вправо' /></NavLink>
    </div>
  );
}

export default ModalBottom;
