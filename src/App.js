
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from './Components/About';
import { Home } from './Components/Home';
import NoteState from './Context/notes/NotesState';
import Navbar from './Components/Navbar';
import Signup from './Components/Signup';
import Login from './Components/Login';
import Alert from './Components/Alert';
import {useState} from 'react';
import Notes from './Components/Notes';
import Header from './Components/Header';
import Footer from './Components/Footer';

function App() {
  const [alert, setAlert]= useState(null); 
  const showAlert =(message,type)=>{
    
   setAlert({
  
     msg: message,
     type: type
   }) 
   setTimeout(() => {
    setAlert(null);
   }, 3000);
  }
  
 
  return (
    <div className="App">
      <NoteState>
      <Router>
        <Navbar/>
        <Header/>
        <Alert alert={alert}/>
        <div >
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/notes" element={<Notes showAlert={showAlert}/>}/>
          <Route exact path="/about" element={<About/>} />
          <Route exact path="/login" element={<Login showAlert={showAlert}/>} />
          <Route exact path="/signup" element={<Signup showAlert={showAlert}/>} />
       
      </Routes>
      </div>
      <Footer/>
    </Router>
      </NoteState>
    </div>
  );
}

export default App;
