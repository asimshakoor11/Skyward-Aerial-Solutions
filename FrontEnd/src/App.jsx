import { useState } from 'react'
import './App.css'
import Navbar from './Components/Global/Navbar'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from './Pages/HomePage/HomePage';
import Footer from './Components/Global/Footer';

function App() {

  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<HomePage />}></Route>
        </Routes>
        <Footer/>
      </Router>
    </div>
  )
}

export default App
