import React from "react";
import s from "./barraIzquierda.module.css";

function BarraIzquierda() {
  return (
    <div
      id="sideNav"
      class=" lg:block hidden bg-white w-64 h-screen fixed rounded-none border-none"
    >
      {/* <BarraIzquierda></BarraIzquierda> */}

      <div class="bg-gray-900 h-full p-4 space-y-4">
        <div className="bg-gray-500 h-250">
          <p>Disponible</p>
          <h1>$500.00</h1>
          <p>En apuestas</p>
          <h1>$1500.00</h1>
          <div class="flex">
            <button>Depositar</button>
            <button>Retirar</button>
          </div>
        </div>
        <a
          href="#"
          aria-label="dashboard"
          class="relative px-4 py-3 flex items-center space-x-4 rounded-lg text-white bg-gradient-to-r from-sky-600 to-cyan-400"
        >
          <i class="fas fa-home text-white"></i>
          <span class="-mr-1 font-medium">Inicio</span>
        </a>

        <a
          href="#"
          class="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-500 group"
        >
          <i class="fas fa-wallet"></i>
          <span>Billetera</span>
        </a>
        <a
          href="#"
          class="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-500 group"
        >
          <i class="fas fa-exchange-alt"></i>
          <span>Transacciones</span>
        </a>
        <a
          href="#"
          class="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-500 group"
        >
          <i class="fas fa-user"></i>
          <span>Mi cuenta</span>
        </a>
        <a
          href="#"
          class="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-500 group"
        >
          <i class="fas fa-sign-out-alt"></i>
          <span>Cerrar sesión</span>
        </a>
      </div>
    </div>
  );
}

export default BarraIzquierda;
