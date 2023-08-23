
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './containers/Header';
import ProductListing from './containers/ProductListing';
import ProductDetails from './containers/ProductDetails';
import NotFound from './containers/NotFound';
function App() {
  return (
      <div>
          <Header/>
          <Router>
              <Routes>
                  <Route exact path="/"  element={<ProductListing/>} />
                  <Route exact path="/product"  element={<ProductListing/>} />
                  <Route exact path="/product/:productId" element={<ProductDetails/>} />
                  <Route  path="*" element={<NotFound/>}/>
              </Routes>
          </Router>
    </div>
  );
}

export default App;
