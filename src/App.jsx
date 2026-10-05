<<<<<<< HEAD
import React from 'react';
import PaginaInicio from './pages/Inicio';
=======
import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
>>>>>>> 069772b3fe87d28b1c186c5f005783f3634d75dc

const App = () => {
  return (
    <div>
      <PaginaInicio />
    </div>
  );
};

export default App;
