import React from 'react';
import s from './Radio.module.scss';

const Radio = (props) => { 

  return (    
    <label className={`${s.radio} ${s.option}`}>
      <input className={s.radio__input} type='radio' id={props.id} name={props.name} value={props.value} defaultChecked={props.checked} disabled={props.disabled}></input>
      <span className={s.radio__box}></span>
      <span>{props.value}</span>
    </label>
  );
}

export default Radio;
