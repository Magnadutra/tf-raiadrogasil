import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ListEmployees from './pages/ListEmployees/index.js';
import Register from './pages/Register';
import Cep from './pages/Cep.js/index.js';


export default function App() {
  return (
    <>
      <header>
        <h1>testando</h1>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<ListEmployees />} />
          <Route path="/cadastro" element={<Register />} />
        </Routes>
      </main>
    </>
  );
}
