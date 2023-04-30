
import { useState } from 'react';

import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  //Link
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type)=>{
    setAlert ({
      msg: message,
      type: type,
    })
      setTimeout (()=>{
          setAlert(null);
      }, 2000)
    
  }

  const toogleStyle = ()=>{
    if (mode === "light")
    {
      setMode('dark')
      document.body.style.backgroundColor = "#363636";
      showAlert ('Dark Mode has been enabled', 'success');
      document.title = 'TextUtils -  Dark Mode Enabled';    }
    else
    {
      setMode('light')
      document.body.style.backgroundColor = "white";
      showAlert ('Light Mode has been enabled', 'success');
      document.title = 'TextUtils -  Light Mode Enabled';  
    }
  }
  return (
    <>
   <Router>
<Navbar title="TextUtils" mode = {mode} toogleMode = {toogleStyle} aboutText = "AboutText"/>
<Alert alert= {alert}/>
<div className="container my-3">
<Routes>
          <Route path="/about" element={<About/>}>
            
          </Route>
          
          <Route path="/" element={<Textform showAlert = {showAlert} mode = {mode} heading= "Enter the text to Analyze Below"/>}>
          
          </Route>
        </Routes>


</div>
</Router> 
</>

);
}

export default App;