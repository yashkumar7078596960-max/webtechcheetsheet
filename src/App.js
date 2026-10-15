import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Nav from './nav';
import Home from './home';
import About from './about';
import Contact from './contact';
import Whatsapp from './whatsapp';
import Html from './html';
import Css from './css';
import Startlearning from './startlearning';
import Javascript from './javascript';
import React from './react';
import Node from './node';
import C from './c';
import CPP from './cpp';
import Python from "./python";
import Java from "./java";
import SQL from "./sql";

function App() {
  return (
    <BrowserRouter>

      <Nav />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/html" element={<Html />} />
        <Route path="/startlearning" element={<Startlearning />} />
        <Route path="/css" element={<Css />} />
        <Route path="/javascript" element={<Javascript />} />
        <Route path="/react" element={<React />} />
        <Route path="/node" element={<Node />} />
        <Route path="/c" element={<C />} />
        <Route path="/cpp" element={<CPP />} />
        <Route path="/python" element={<Python />} />
        <Route path="/java" element={<Java />} />
        <Route path="/sql" element={<SQL />} />

      </Routes>

      <Whatsapp />

      <footer className="footer">
        <p>© 2026 CodeLearn | Made with React</p>
      </footer>

    </BrowserRouter>
  );
}

export default App;
