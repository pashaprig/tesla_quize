import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Content.module.scss'
import Navigation from './../Navigation/Navigation';
import { ReactComponent as IconPlay } from './../../img/iconPlay.svg';

const Content = () => {
  return (
    <section className={s.content}>
      <h1>Инвecтиpyйте в Tesla&nbsp;– и начните зapaбaтывaть от
        <span className='contentColor'> €4000</span>
      </h1>
        <Navigation />
      <p>Обучение по программе МВА – это путь к глубинному пониманию процессов управления в условиях динамичной бизнес-среды и интенсивной конкуренции.
        Магистр бизнес-администрирования – необходимая квалификация для современного успешного управленца, признается во всем мире.
        Диплом МВА от МИМ -единственный в Украине имеет сразу две международные аккредитации: IQA от CEEMAN и AMBA.</p>
      <NavLink to='/modal'><IconPlay className={s.iconPlay} width='25' height='25' alt='Иконка Play' /> Начать</NavLink>
    </section>);
}
export default Content;