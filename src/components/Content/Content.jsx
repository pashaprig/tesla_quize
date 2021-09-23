import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Content.module.scss'
import Navigation from './../Navigation/Navigation';
import { ReactComponent as IconPlay } from './../../img/iconPlay.svg';
const URL = 'https://arbcrm.site/rest/quiz/view?id=2';

class Content extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      quiz: []
    };
  }

  componentDidMount() {
    fetch(URL)
      .then(res => res.json())
      .then(
        (result) => {

          this.setState({
            isLoaded: true,
            quiz: result
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {
    const { error, isLoaded, quiz } = this.state;
    if (error) {
      return <div>Ошибка: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Загрузка...</div>;
    } else {
      const START_OF_LAST_WORD = 12
      const lastWord = (quiz.h1.slice(START_OF_LAST_WORD));
      const firstWord = (quiz.h1.slice(0,START_OF_LAST_WORD));

      return (        
        <section className={s.content}>
          <h1>{firstWord}
            <span className='contentColor'>{lastWord}</span>
          </h1>
          <Navigation />
          <p>{quiz.description_start}</p>
          <NavLink to='/modal'><IconPlay className={s.iconPlay} width='25' height='25' alt='Иконка Play' />{quiz.button_text_start}</NavLink>
        </section>
      );
    }
  }
}

export default Content;