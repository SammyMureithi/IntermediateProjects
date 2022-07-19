import logo from './logo.svg';
import './App.css';
import Navbar from './Components/NavBar';
import Main from './Components/Main';
import { useState } from 'react';

function App() {
  const [dark,setDark]=useState(false)
  function handleClick(){
      setDark(prevState => !prevState)
  }
  return (
    <div className="App">
      <Navbar darkMode={dark} handleClick={handleClick}/>
      <Main darkMode={dark}/>
    </div>
  );
}

export default App;
