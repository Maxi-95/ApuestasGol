import React from "react";
import s from "./barraIzquierda.module.css";

function BarraIzquierda() {
  return (
    <div className={s.fondo}>
      <div>
        <select
          class="h-50 w-300 text-center border border-solid border-gray-900 p-4"
          id="seleccion"
          name="seleccion"
        >
          <option value="opcion1">La liga de españa</option>
          <option value="opcion2">Opción 2</option>
          <option value="opcion3">Opción 3</option>
          <option value="opcion3">Opción 4</option>
          <option value="opcion3">Opción 5</option>
        </select>
      </div>
      <div>
        <select
          class="h-50 w-300 text-center border border-solid border-gray-900 p-4"
          id="seleccion"
          name="seleccion"
        >
          <option value="opcion1">La liga de Italia</option>
          <option value="opcion2">Opción 1</option>
          <option value="opcion2">Opción 2</option>
          <option value="opcion3">Opción 3</option>
          <option value="opcion3">Opción 4</option>
        </select>
      </div>
      <div>
        <select
          class="h-50 w-300 text-center border border-solid border-gray-900 p-4"
          id="seleccion"
          name="seleccion"
        >
          <option value="opcion1">La liga de Alemania</option>
          <option value="opcion2">Opción 1</option>
          <option value="opcion2">Opción 2</option>
          <option value="opcion3">Opción 3</option>
        </select>
      </div>
      <div>
        <select
          class="h-50 w-300 text-center border border-solid border-gray-900 p-4"
          id="seleccion"
          name="seleccion"
        >
          <option value="opcion1">La liga de Francesa</option>
          <option value="opcion2">Opción 1</option>
          <option value="opcion2">Opción 2</option>
        </select>
      </div>
    </div>
  );
}

export default BarraIzquierda;
