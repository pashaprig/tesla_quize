import React from 'react';
import s from './ModalBotton.module.css';

const ModalBottom = () => {
  return (
    <div className={s.modalBottom}>
      <img src='https://r.oldcrm.site/tesla+pl/pl(quiz)/img/bar1.svg' width='20' height='20' alt='статус бар'></img>
      <span>0 из 100%</span>
      <a href='#.#'>Далее</a>
    </div>
  );
}

export default ModalBottom;