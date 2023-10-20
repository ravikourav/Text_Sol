import './App.css';
import Navbar from './components/Navbar';
import TextFrom from './components/TextFrom';
import Alerts from './components/Alerts';
import { useState } from 'react';

function App() {

  const [mode , setMode ] = useState('light');
  const [alert, setAlert] = useState(null)

  const toggleMode =() =>{

    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor = '#212529'
      showAlert(" Dark Mode Has been Enabled" , "success")
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert(" Light Mode Has been Enabled" , "success")
    }
  }

  const showAlert = (message , type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    },1500)
  }

  return (
    <>
      <Navbar title='Text_Sol' mode={mode} toggleMode={toggleMode}/>
      <Alerts alert={alert}/>
      <div className="container my-3" >
        <TextFrom showAlert={showAlert} mode={mode} />
      </div>
    </>
  );
}

export default App;
