import React from 'react';
import s from './Hero.module.scss';
import elon from './../../img/elon.jpg'
// import elon2x from './../../img/elon@x2.jpg'
// import elonWP from './../../img/elon.webp'
// import elonWP2x from './../../img/elon@2x.webp'

const Hero = () => {
  return (
    <div className={s.hero}>
        <img className={s.heroImg} src={elon} alt='Илон Маск' width='100%'></img>
    </div>
  );
}

export default Hero;