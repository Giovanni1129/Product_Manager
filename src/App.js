import React from 'react';
import './App.css';
import {Router} from "@reach/router";
import Main from "./views/Main";
import ProductDetail from "./views/ProductDetail";
function App() {
  return (
    <div className="App">
      <Router>
        <Main path="/"/>
        <ProductDetail path='/products/:id'/>
      </Router>
    </div>
  );
}

export default App;
