import React from 'react';
import './styles/App.css';
import Home from './components/Home';
import ProductList from './components/ProductList';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignUp from './components/SignUp';
import Header2 from './components/Header2';

function App() {
  return (
    <Router>
      <div>
        {/* <Header /> */}
        <Header2 />
        <br></br>
        <Routes>
        <Route path = "/" element = {<Home />} />
        <Route path = "/shop" element = {<ProductList />} />
        </Routes>
       <SignUp />
        <Footer />
      </div>
    </Router>
  );
};

export default App;
