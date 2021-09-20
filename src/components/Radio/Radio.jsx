import React from 'react';
import s from './Radio.module.scss';

const Radio = (props) => {
  return (    
    <label className={s.inputRadio}>
      <input type='radio' id={props.id} name={props.name} value={props.value}></input><span>{props.value}</span>
    </label>
  );
}

export default Radio;
