import React from 'react';
import Header from './components/Header';
import './styles/App.css';
import Home from './components/Home';
import ProductList from './components/ProductList';
import Footer from './components/Footer';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import SignUp from './components/SignUp';

function App() {

  const responseMessage = (response) => {
    console.log(response);
};
const errorMessage = (error) => {
    console.log(error);
};

  return (
    <Router>
      <div>
        <Header />
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
