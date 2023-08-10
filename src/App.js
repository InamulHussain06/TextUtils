import './App.css';
import Alert from './components/Alert';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import { useState } from 'react';




function App() {
  const [mode,setMode]=useState('light');
  const [alert, setalert] = useState(null)

  const showAlert=(message,type)=>{
     setalert({
      msg:message,
      type:type
     })
     setTimeout(() => {
      setalert(null)
     }, 1100);
  }

  
  const toggleMode=()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor='#042743';
      showAlert('Dark mode has been Enabled','success');
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert('Light mode has been Enabled','success');

    }
  }

  
  return (

    <>
      <Navbar title='Textutils' aboutText='About Us' mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert} />
      <div className="container my-2">
        <TextForm heading='Enter your Text below to Analyze' mode={mode} showAlert={showAlert}/>
        {/* <About/> */}
      </div>
    </>
  );
}

export default App;
