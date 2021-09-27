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

  state = {
    description_start: undefined
  }

  gettingData = async () => {
    const data = await fetch(URL);
    console.log(data);

    this.setState({
      description_start: data.description_start
    });
  }

  render() {
    console.log(this);
    return (
      <BrowserRouter>
        <div className="page-wrapper">
          <Header 
            description_start={this.state.description_start}
          />
          <main className='app-wrapper-content'>
            <Route path='/index' component={MainBlock} />
            <Route path='/modal' component={Modal} />
            <Route path='/modalLast' component={ModalLast} />
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    );

  }

}

export default App;
