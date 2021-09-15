import React from 'react';
import Hero from "./Hero/Hero";
import Content from "./Content/Content";
import s from './MainBlock.module.css';

const MainBlock = () => {
  return (
    <main className={s.main}>
      <Hero />
      <Content />
    </main>
  );
}

export default MainBlock;