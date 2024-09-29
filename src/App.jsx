import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import store from './redux/store';
import Header from './components/Header';
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';
import Cart from './components/Cart';
import NotFound from './components/NotFound';
import './App.css';

const App = () => {
  return (
      <Provider store={store}>
          <Router>
              <Header />
              <Routes>
                  <Route path="/" element={<ProductList />} />
                  <Route path="/product/:id" element={<ProductDetail />} />
                  <Route path="/cart" element={<Cart />} />
                  <Route path="*" element={<NotFound />} />
              </Routes>
          </Router>
      </Provider>
  );
};


export default App;
