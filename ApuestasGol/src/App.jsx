import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import "./App.css";

function App() {
  const apuestas = useSelector((state) => state.apuestas);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Apuestas:</h2>
      <ul>
        {apuestas.map((apuesta, index) => (
          <li key={index}>
            Equipo 1: {apuesta.equipo1}, Equipo 2: {apuesta.equipo2}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
