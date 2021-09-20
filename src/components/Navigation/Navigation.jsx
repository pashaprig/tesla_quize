import React from 'react';
import s from './Navigation.module.scss'


const Navigation = () => {
  return (
    <ul className={s.navList}>
      <li className={s.navItem}>обучение</li>
      <li className={s.navItem}>онлайн-курс</li>
      <li className={s.navItem}>образование</li>
      <li className={s.navItem}>руководство</li>
    </ul>);
}
export default Navigation;