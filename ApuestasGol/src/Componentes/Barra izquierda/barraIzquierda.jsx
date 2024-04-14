import React from "react";
import s from "./barraIzquierda.module.css";

function BarraIzquierda() {
  return (
    <div
      id="sideNav"
      class="lg:block hidden bg-white w-64 h-screen fixed rounded-none border-none"
    >
      {/* <BarraIzquierda></BarraIzquierda> */}

      <div class="p-4 space-y-4">
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
    //   <div>
    //     <select
    //       class="h-50 w-300 text-center border border-solid border-gray-900 p-4"
    //       id="seleccion"
    //       name="seleccion"
    //     >
    //       <option value="opcion1">La liga de españa</option>
    //       <option value="opcion2">Opción 2</option>
    //       <option value="opcion3">Opción 3</option>
    //       <option value="opcion3">Opción 4</option>
    //       <option value="opcion3">Opción 5</option>
    //     </select>
    //   </div>
    //   <div>
    //     <select
    //       class="h-50 w-300 text-center border border-solid border-gray-900 p-4"
    //       id="seleccion"
    //       name="seleccion"
    //     >
    //       <option value="opcion1">La liga de Italia</option>
    //       <option value="opcion2">Opción 1</option>
    //       <option value="opcion2">Opción 2</option>
    //       <option value="opcion3">Opción 3</option>
    //       <option value="opcion3">Opción 4</option>
    //     </select>
    //   </div>
    //   <div>
    //     <select
    //       class="h-50 w-300 text-center border border-solid border-gray-900 p-4"
    //       id="seleccion"
    //       name="seleccion"
    //     >
    //       <option value="opcion1">La liga de Alemania</option>
    //       <option value="opcion2">Opción 1</option>
    //       <option value="opcion2">Opción 2</option>
    //       <option value="opcion3">Opción 3</option>
    //     </select>
    //   </div>
    //   <div>
    //     <select
    //       class="h-50 w-300 text-center border border-solid border-gray-900 p-4"
    //       id="seleccion"
    //       name="seleccion"
    //     >
    //       <option value="opcion1">La liga de Francesa</option>
    //       <option value="opcion2">Opción 1</option>
    //       <option value="opcion2">Opción 2</option>
    //     </select>
    //   </div>
    // </div>
  );
}

export default BarraIzquierda;
