import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import MainBlock from "./components/MainBlock/MainBlock";
import Modal from "./components/Modal/Modal";
import ModalLast from "./components/ModalLast/ModalLast";
import "./App.scss";
const URL = "https://arbcrm.site/rest/quiz/view?id=2";

// Список для доработки:
// - Вычиститть мусор от разработчикаЖ подсказки, комментарии...
// - App.js отработка ошибок для GET
// - QuizCard доделать отправку данных на сервер
// - -\\- радио инпуты должны тоже делать сабмит
// - -\\- нужно отлавливать быьранный радиобаттон
// - Сделать иконки, манифест...
// - Добавить описание
// - Удалить весь закомментированнй код

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      data: {},
      currentQuestion: 0,
      questionsNumbers: [],
      type: 'visit'
    };
  }

  onNextButtonClick = () => {    
    this.setState(
      {
        currentQuestion: this.state.currentQuestion + 1,
      }
    );
  }

  componentDidMount() {
    fetch(URL)
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            data: result
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      );
  }

  render() {
    // const { error, isLoaded, quiz } = this.state;
    // if (error) {
    //   return <div>Ошибка: {error.message}</div>;
    // } else if (!isLoaded) {
    //   return <div>Загрузка...</div>;
    // } else {
      // console.log(this.state)
    return (
      <BrowserRouter>
        <div className="page-wrapper">
          <Header />
          <main className="app-wrapper-content">
            <Route
              exact
              path="/"
              render={() => <MainBlock data={this.state.data} />}
            />

            <Route
              exact
              path="/modal"
              render={(props) => {
                return (
                  this.state.data.id && (
                    <Modal
                      data={this.state.data}
                      currentQuestion={this.state.currentQuestion}
                      questionsNumbers={this.state.questionsNumbers}
                      onNextButtonClick={this.onNextButtonClick}
                    />
                  )
                );
              }}
            />

            <Route
              exact
              path="/modalLast"
              render={(props) => <ModalLast data={this.state.data} />}
            />
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
