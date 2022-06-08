import './App.css';
import Header from './components/Header';
import Add from './components/Add';
import Show from './components/Show';
import {createContext, useState} from 'react';

export const Option=createContext();


function App() {
  const [option, setOption] = useState("Add");

  return (
  <Option.Provider value={[option,setOption]}>
    <div className="App">
      <Header />
      {option==="Add"?<Add/>:<Show/>}
    </div>
  </Option.Provider>
  );
}

export default App;
