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
        <div className="bg-cover bg-[url('https://static8.depositphotos.com/1339671/850/i/450/depositphotos_8503533-stock-photo-football-grass-field.jpg')] flex flex-col justify-around text-center h-250">
          <strong class="text-green">Disponible</strong>
          <h1 class="text-gray-100 text-3xl">$500.00</h1>
          <strong class="text-green">En apuestas</strong>
          <h1 class="text-gray-100 text-3xl">$1500.00</h1>
          <div class="flex justify-around text-gray-100">
            <button>Depositar</button>
            <p>|</p>
            <button>Retirar</button>
          </div>
        </div>

        <button class="bg-transparent text-green hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-green hover:border-transparent rounded w-full">
          Ver Apuestas
        </button>
        <div className="flex justify-between items-center mt-8">
          <strong class="text-gray-400">Favorites Leagues</strong>
          <strong class="text-gray-400">ADD</strong>
        </div>
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
        <div className="flex justify-between items-center mt-8">
          <strong class="text-gray-400">Favorites Club</strong>
          <strong class="text-gray-400">ADD</strong>
        </div>
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
