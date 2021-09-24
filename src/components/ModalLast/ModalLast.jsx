import React from 'react';
import s from './ModalLast.module.scss';
import { ReactComponent as IconCheck } from './../../img/check.svg';
import { ReactComponent as IconStatusBar99 } from './../../img/iconStatusBar99.svg';

const URL = 'https://arbcrm.site/rest/quiz/view?id=2';

class ModalLast extends React.Component {
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
      return (
        <div className={s.modalWrapper}>
          <p className={s.description}>{quiz.description_end}</p>
          <p className={s.title}>Нажмите<span className='contentColor'> {quiz.button_text_end}</span>, чтобы зарегистрироваться на платформе Tesla</p>

          <div className={s.modalBottom}>
            <IconStatusBar99 className={s.statusBar} width='20' height='20' aria-label='Иконка StatusBar' />
            <span className={s.modalBottomPercent}>99 из 100%</span>
            <a href='https://r.oldcrm.site/tesla+pl/tesla_new/?sp=103'>{quiz.button_text_end}<IconCheck className={s.iconCheck} width='12' height='12' alt='Иконка Check' /></a>
          </div>
          
        </div>
      );
    }
  }
}

export default ModalLast;