import React from 'react'
import Screen1 from './Componet/Screen1';
import Login from './Componet/Login'; 
import Signup from './Componet/Signup'; 
// import Header from './Componet/Header';
// import JobList from './Componet/JobList';
// // import JobCard from './Componet/JobCard';
// import Footer from './Componet/Footer';
import './App.css';
import { BrowserRouter as Router,Route,Routes,Link } from 'react-router-dom';


function App() {
  return (
    <>
    <Router>
    <Routes>
      <Route path="/" element={<Screen1/>} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Signup" element={<Signup />} />
      {/* <Route path="/home" element={<Header />}  /> */}
    </Routes>
    </Router>
    
      
      
     
    {/* <Screen1/> */}
    {/* <Login/> */}
    {/* <Signup/> */}
    
    </>
    
  )
}

export default App