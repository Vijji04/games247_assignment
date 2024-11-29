

import './App.scss';

import Modal from './components/Modal/Modal';


import {getData} from './mocks/getData'


function App() {


  const data = getData()

  return (
    <div className="App" >



     <Modal data={data} />

    </div>
  );
}

export default App;
