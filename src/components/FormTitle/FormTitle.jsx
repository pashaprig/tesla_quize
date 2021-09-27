import React from 'react';
import s from './FormTitle.module.scss';
import { ReactComponent as IconArrow } from './../../img/iconArrow.svg';
// import './../../global.js'
const URL = 'https://arbcrm.site/rest/quiz/view?id=2';

class FormTitle extends React.Component {
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
            quiz: result.Questions
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
      const arrayNumber = (quiz[0].position - 1); //Как правильно подобрать номер Questions?
      return (
        <div>
          <div className={s.title}>
            <div>
              <span className='contentColor'>{quiz[arrayNumber].position + ` `}<IconArrow className={s.iconArrow} width='24' height='24' aria-label='Стрелка вправо' /></span>
              <span>{quiz[arrayNumber].question}</span>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default FormTitle;
