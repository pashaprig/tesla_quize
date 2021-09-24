import { BrowserRouter, Route } from "react-router-dom";
import './App.scss';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header'
import MainBlock from './components/MainBlock/MainBlock';
import Modal from './components/Modal/Modal';
import ModalLast from './components/ModalLast/ModalLast';


const App = () => {
  return (
    <BrowserRouter>
      <div className="page-wrapper">
        <Header />
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

export default App;
