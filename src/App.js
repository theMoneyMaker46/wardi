import React, { useState } from 'react';
import './styles/App.css';
import Home from './components/Home';
import Shop from './components/Shop';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header2 from './components/Header2';

function App() {

  const [cartCount, setCartCount] = useState(0);

  const updateCartCount = (count) => {
    setCartCount(count);
    // setIsAddedToCart("Added to Cart !");
  }


  return (
    <Router>
      <div>
        {/* <Header /> */}
        <Header2 cartCount={cartCount} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop updateCartCount={updateCartCount} />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
