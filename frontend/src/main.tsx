import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Listagem from "./pages/Listagem/listagem"
import Comprar from "./pages/ComprarFichas/comprar"
import Receber from "./pages/ReceberFichas/receber"


createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Listagem />} />
      <Route path="/comprar" element={<Comprar />} />
      <Route path="/receber" element={<Receber />} />
    </Routes>
  </BrowserRouter>
)
