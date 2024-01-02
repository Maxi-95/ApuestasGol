import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Componentes/Navbar/navegador";
import BarraIzquierda from "./Componentes/Barra izquierda/barraIzquierda";
import Eventos from "./Componentes/Eventos/eventos";

import "./App.css";

function App() {
  return (
    <div>
      <Navbar />
      <div class="bg-blue-500 h-screen flex">
        <div class="bg-red-500 h-screen w-300">
          <BarraIzquierda />
        </div>
        <div class="bg-gray-600 h-screen w-1600">
          <Eventos />
        </div>
      </div>
    </div>
  );
}

export default App;
