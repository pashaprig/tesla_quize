import React from 'react';
import Radio from '../Radio/Radio';
import s from './RadioGroupe.module.scss';

const RadioGroupe = (props) => {
  
  return (
    <div className={s.form}>
      {props.Answers.map(item => (
        <Radio key={item} id={item} name={props.name} value={item} /*checked={item.checked} disabled={item.disabled}*/ />
      ))}
    </div>
  );
}

export default RadioGroupe;