import React from "react";
//import s from "./navegador.module.css";
import Cartas from "../Cartas/cartas";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useState } from "react";

function Eventos() {
  const partidos = useSelector((state) => state.apuestas);

  return (
    <div class="flex flex-wrap justify-center">
      {partidos?.map((e) => (
        <Cartas datos={e} />
      ))}
    </div>
  );
}

export default Eventos;
