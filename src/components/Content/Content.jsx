import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Content.module.scss'
import Navigation from './../Navigation/Navigation';
import { ReactComponent as IconPlay } from './../../img/iconPlay.svg';

const Content = ( props ) => {

  const START_OF_LAST_WORD = 12
  const firstWord = props.heading1 ? (props.heading1.slice(0,START_OF_LAST_WORD)) : '';
  const lastWord = props.heading1 ? (props.heading1.slice(START_OF_LAST_WORD)) : '';

  return (
    <section className={s.content}>
      <h1>{firstWord}
        <span className='contentColor'>{lastWord}</span>
      </h1>
      <Navigation />
      <p>{props.descriptionStart}</p>
      <NavLink to='/modal'><IconPlay className={s.iconPlay} width='25' height='25' alt='Иконка Play' />{props.startButtonText}</NavLink>
    </section>
  );
}

export default Content;