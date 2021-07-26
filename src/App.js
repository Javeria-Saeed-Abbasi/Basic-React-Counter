import React, {useState} from 'react';
import './App.css';
import Parent from './components/Parent';
import CounterContext from './components/CounterContext';

function App() {
  let countState = useState(35);
  // let [count, SetCount] = useState(35);
  return (
    <CounterContext.Provider value={countState} >
    <div>
     <Parent/>
    </div>
    </CounterContext.Provider>

  );
}

export default App;
