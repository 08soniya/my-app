//import logo from './logo.svg';
import './App.css';
//import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import {useState} from 'react';
// import {
//   BrowserRouter,
//   Routes,
//   Route
// } from "react-router-dom";

function App() {
  const [mode, newMode] = useState('light');
  const [alert,setAlert] = useState('');
  const [color,newColor] = useState('#252f3e');
  const colorPicker = (event) => {
    //console.log("On change");
    newColor(event.target.value);
    document.body.style.backgroundColor = color;
  }
  const toggleMode = () =>{
    if(mode==='dark'){
      document.body.style.backgroundColor = '#fff';
      newMode('light');
      document.title ="Text Utils - Light Mode";
      setInterval(() => {
        document.title ="Text Utils - AMAZING";
      },1000);
      }
    else
    {
      document.body.style.backgroundColor = '#252f3e';
      newMode('dark');
      document.title ="Text Utils - Dark Mode";
    }
  }
  const showAlert = (message,type) =>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert({
        msg:null,
        type:null
      })
    }
    , 1500);
  }
  return (
    <>
    {/* <BrowserRouter> */}
      <Navbar title="Firstapp" mode={mode} toggle={toggleMode} color={color} colorPicker={colorPicker}/>
      <div className="container">
      <TextForm heading="Fill the below form" mode={mode} alert={alert} showAlert={showAlert}/>
        {/* <Routes>
          <Route exact path="/about" element={<About />} />
          <Route exact path="/" element={<TextForm heading="Fill the below form" mode={mode} alert={alert} showAlert={showAlert}/>} />
        </Routes> */}
      </div> 
    {/* </BrowserRouter>   */}
    {/* <About /> */}
    </>
  );
}

export default App;
