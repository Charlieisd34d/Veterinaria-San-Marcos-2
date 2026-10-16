import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'

// main.jsx solo monta la aplicación en el <div id="root"> de index.html.
// El router NO va aquí: vive en App.jsx, junto al mapa de rutas.
createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)