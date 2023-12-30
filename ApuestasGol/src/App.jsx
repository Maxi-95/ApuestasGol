import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import "./App.css";

function App() {
  const apuestas = useSelector((state) => state.apuestas);
  const dispatch = useDispatch();

  return (
    <div className="bg-red-500">
      {/* <h1 className="bg-red-500 text-3xl font-bold underline">Hello world!</h1>
      <h2>Apuestas:</h2>
      <ul>
        {apuestas.map((apuesta, index) => (
          <li key={index}>
            Equipo 1: {apuesta.equipo1}, Equipo 2: {apuesta.equipo2}
          </li>
        ))}
      </ul> */}
      awdhjwui
    </div>
  );
}

export default App;
