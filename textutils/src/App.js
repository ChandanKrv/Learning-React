import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import { useState } from 'react';

function App() {

  const [mode, setMode] = useState("light");

  const [revMode, setRevMode] = useState("dark");

  const toggleMode=()=> {
    if (mode === 'light') {
      setMode('dark')
      setRevMode('light')
      document.body.style.backgroundColor = '#042743';
    }
      
    else {
      setMode('light')
      setRevMode('dark')
      document.body.style.backgroundColor = 'white';

    }
     
  }
  

  return (
    <>
      {/* <Navbar title="TextUtils" aboutText="About Us" /> */}
      <Navbar title="TextUtils" mode={mode} revMode={revMode} toggleMode={toggleMode} />
     
      <div className="container my-3"></div>   
      
      <div className="container">
        <TextForm heading="Enter the text to analyze" mode={mode} revMode={revMode} />
      </div>   
 
      
{/*       <About></About>
 */}    </>
    
  );
}

export default App;
