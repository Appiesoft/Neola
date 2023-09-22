import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from './components/Footer/Footer';
import Home from './components/home/Home';
import Header from './components/Header/Header';
const App = () => {
  return (
    <div>
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/" element={<Home />}>
         
        
        </Route>
      </Routes>
      <Footer/>
    </BrowserRouter>
      
    </div>
  )
}

export default App
