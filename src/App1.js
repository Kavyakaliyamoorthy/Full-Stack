// src/App.js
import React from 'react';
import Header from './components/Header';
import JobList from './components/JobList';
import Footer from './components/Footer';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Header />
      <JobList />
      <Footer />
    </div>
  );
};

export default App;
