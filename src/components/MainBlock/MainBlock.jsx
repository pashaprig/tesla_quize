import React from 'react';
import s from './MainBlock.module.scss';
import Hero from './../Hero/Hero';
import Content from './../Content/Content';

const MainBlock = () => {
  return (
    <section className={s.main}>
      <Hero />
      <Content />
    </section>
  );
}

export default MainBlock;