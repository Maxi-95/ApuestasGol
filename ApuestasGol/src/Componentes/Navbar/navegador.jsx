import React from "react";
import logo from "../../Img/Apuestas LOGO.png";
import s from "./navegador.module.css";

function Navbar() {
  return (
    <nav className={s.logoButton}>
      <div class="ml-1 flex">
        <strong className={s.colorLogo}>APUESTAS</strong>
        <h1>Gol</h1>
        {/* <img
            src="https://www.emprenderconactitud.com/img/POC%20WCS%20(1).png"
            alt="logo"
            class="h-20 w-28"
          /> */}
      </div>

      <div class=" w-200 flex justify-between	">
        <button>Perfil</button>

        <button>Cerrar Sesion</button>
      </div>
    </nav>
  );
}

export default Navbar;
