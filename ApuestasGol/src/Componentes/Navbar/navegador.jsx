import React from "react";
import logo from "../../Img/Apuestas LOGO.png";
import s from "./navegador.module.css";

function Navbar() {
  return (
    <header class="text-gray-400 bg-gray-900 body-font">
      <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a class="flex title-font font-medium items-center text-white mb-4 md:mb-0">
          <img class="h-40" src={logo} alt="" />
        </a>
        <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <a class="mr-5 hover:text-white">inicio secion</a>
          <a class="mr-5 hover:text-white">Monto</a>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
