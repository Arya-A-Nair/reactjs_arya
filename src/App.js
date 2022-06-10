import './App.css';
import Header from './components/Header';
import Add from './components/Add';
import Show from './components/Show';
import {createContext, useState} from 'react';
import data from './data';

export const Option=createContext();
export const userdata=createContext();


function App() {
  const [option, setOption] = useState("Add");

  return (
  <Option.Provider value={[option,setOption]}>
    <userdata.Provider value={data}>
      <div className="App">
        <Header />
        {option==="Add"?<Add/>:<Show/>}
      </div>
    </userdata.Provider>
  </Option.Provider>
  );
}

export default App;
