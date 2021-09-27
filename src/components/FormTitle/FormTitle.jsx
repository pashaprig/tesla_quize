import React from 'react';
import s from './FormTitle.module.scss';
import { ReactComponent as IconArrow } from './../../img/iconArrow.svg';

const FormTitle = (props) => {
  return (
    <div>
      <div className={s.title}>
        <div>
          <span className='contentColor'>{props.questionNumber + ` `}<IconArrow className={s.iconArrow} width='24' height='24' aria-label='Стрелка вправо' /></span>
          <span>{props.title}</span>
        </div>
      </div>
    </div>
  );
}

export default FormTitle;
