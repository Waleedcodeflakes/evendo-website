import React from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/Pages/HomePage/HomePage';
import Features from './components/Pages/Features/Features';
import PricingPage from './components/Pages/PricingPage/PricingPage';
import FaqsPage from './components/Pages/FaqsPage/FaqsPage';

function App() {

  return (
    <Router>
      <Routes>
          <Route path='/' element={<HomePage/>} />  
          <Route path='/features' element={<Features/>} /> 
          <Route path='/pricing' element={<PricingPage/>} /> 
          <Route path='/faqs' element={<FaqsPage/>} /> 
      </Routes>
    </Router>
  )
}

export default App
