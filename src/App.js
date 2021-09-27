import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header'
import MainBlock from './components/MainBlock/MainBlock';
import Modal from './components/Modal/Modal';
import ModalLast from './components/ModalLast/ModalLast';
import './App.scss';

const URL = 'https://arbcrm.site/rest/quiz/view?id=2';

class App extends React.Component {

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
    // const { error, isLoaded, quiz } = this.state;
    // if (error) {
    //   return <div>Ошибка: {error.message}</div>;
    // } else if (!isLoaded) {
    //   return <div>Загрузка...</div>;
    // } else {

    return (
      <BrowserRouter>
        <div className="page-wrapper">
          <Header />
          <main className='app-wrapper-content'>
            <Route
              path='/index'
              render={(props) => (
                <MainBlock data={this.state.quiz} />
              )}
            />

            <Route
              path='/modal'
              render={(props) => (
                <Modal data={this.state.quiz} />
              )}
            />

            <Route
              path='/modalLast'
              render={(props) => (
                <ModalLast data={this.state.quiz} />
              )}
            />
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    );

  }

}

export default App;
