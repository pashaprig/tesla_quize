import React from 'react';
import s from './Content.module.css'
import Navigation from './Navigation/Navigation';

const Content = () => {
  return (
    <section className={s.content}>
      <h1>Инвecтиpyйте в Tesla – и начните зapaбaтывaть
        <span className='contentColor'> €4000</span>
      </h1>
        <Navigation />
      <p>Обучение по программе МВА – это путь к глубинному пониманию процессов управления в условиях динамичной бизнес-среды и интенсивной конкуренции.
        Магистр бизнес-администрирования – необходимая квалификация для современного успешного управленца, признается во всем мире.
        Диплом МВА от МИМ -единственный в Украине имеет сразу две международные аккредитации: IQA от CEEMAN и AMBA.</p>
      <button type="button">Начать</button>
    </section>);
}
export default Content;