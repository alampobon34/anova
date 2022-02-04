import React from "react";
import { Container } from "react-bootstrap";
import {Route,Routes} from "react-router-dom";
import './App.css';
import Footer from "./components/Footer/Footer.js";
import Header from "./components/Header/Header.js";
import Contact from './pages/Contact';
import Products from './pages/Products';
import Supports from './pages/Supports';



import Home from "./pages/Home.js";
function App() {
  return (
    <div className="App">
      <Header/>
      <main className="py-1">
        <Container>
        <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/products" element={<Products/>}/>
        <Route path="/supports" element={<Supports/>}/>
        </Routes>
        </Container>
        
      </main>
      <Footer/>
    </div>
  );
}

export default App;
