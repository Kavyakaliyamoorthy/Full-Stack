import React from 'react'
import Screen1 from './Componet/Screen1';
import Login from './Componet/Login'; 
import Signup from './Componet/Signup'; 
import { BrowserRouter as Router,Route,Routes,Link } from 'react-router-dom';
// import { Routes,Route } from 'react-router-dom';
// import React from 'react';
import Header from './Component/Header';
import JobList from './Component/JobList';
import Footer from './Component/Footer';
import './App.css';

function App() {
  return (
    <>
    <Router>
    <Routes>
      <Route path="/" element={<Screen1/>} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Signup" element={<Signup />} />
    </Routes>
    </Router>
    <Header />
      <JobList />
      <Footer />
    {/* <Screen1/> */}
    {/* <Login/> */}
    {/* <Signup/> */}
    
    </>
    
  )
}

export default App