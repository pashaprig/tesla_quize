import React from 'react';
import Radio from '../Radio/Radio';
import s from './RadioGroupe.module.scss';
const URL = 'https://arbcrm.site/rest/quiz/view?id=2';

class RadioGroupe extends React.Component {
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
      const name =(quiz[arrayNumber].question);
      return (
        <div className={s.form}>
          {quiz[arrayNumber].Answers.map(item => (
            <Radio key={item} id={item} name={name} value={item} checked={item.checked} disabled={item.disabled} />
          ))}
        </div>
      );
    }
  }
}

export default RadioGroupe;