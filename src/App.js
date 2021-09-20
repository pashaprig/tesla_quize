import { BrowserRouter, Route } from "react-router-dom";
import './App.scss';
import Header from './components/Header/Header'
import MainBlock from './components/MainBlock/MainBlock';
import Modal from './components/Modal/Modal';


const App = () => {
  return (
    <BrowserRouter>
      <div className="page-wrapper">
        <Header />
        <div className='app-wrapper-content'>
          <Route path='/index' component={MainBlock} />
          <Route path='/modal' component={Modal} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
