import React from 'react';
import s from './FormTitle.module.scss';

const FormTitle = () => {
  return (
    <form className={s.modalWrapper} action='' method='POST'>
      <div className={s.title}>
        <span className='contentColor'>1 <img src='https://r.oldcrm.site/tesla+pl/pl(quiz)/img/icon-arrow_right.svg' alt=''></img></span>
        <span>Вы раньше инвестировали в проекты <span className='contentColor'>Tesla </span> ?</span>
      </div>
    </form>
  );
}

export default FormTitle;