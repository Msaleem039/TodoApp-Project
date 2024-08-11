
import { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import Calculator from './components/Calculator';
import Weatherapp from './components/Weatherapp';

function App() {


  const [data , setData]= useState(0);
  const increment=()=>{
 if(data<10){
  setData(data+1)
 }
  }
  const decrement=()=>{
  if(data>1){
    setData(data-1);
  }
  }
  return (
    <div className="App">
<Home/>
    </div>
  );
}

export default App;
