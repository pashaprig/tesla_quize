import React from 'react';
import s from './Hero.module.scss';
import elon from './../../img/elon.jpg'

const Hero = () => {
  return (
    <div className={s.hero}>
        <img className={s.heroImg} src={elon} alt='Илон Маск' width='100%'></img>
    </div>
  );
}

export default Hero;