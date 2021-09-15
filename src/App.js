import './App.css';
import Header from './components/Header/Header';
import MainBlock from './components/MainBlock/MainBlock';
import Modal from './components/Modal/Modal';


const App = () => {
  return (
    <div className="page-wrapper">
      <Header />
      <MainBlock />
      <Modal />
    </div>
  );
}

export default App;
