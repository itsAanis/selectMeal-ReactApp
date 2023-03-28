
import './App.css';
import Meals from './components/Meals';
import Search from './components/Search';
import Modal from './components/Modal';

import { useContext } from 'react'
import { AppContext } from './Context'



function App() {

const {showModal} = useContext(AppContext)

  return (
    <div className="App">
      <Search/>
      <Meals/>
    
    {showModal &&<Modal />}
    </div>
  );
}

export default App;
