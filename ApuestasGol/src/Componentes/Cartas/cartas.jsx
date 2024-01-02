import React from "react";
//import s from "./navegador.module.css";

function Cartas({ datos }) {
  const { equipo1, equipo2 } = datos;

  return (
    <div>
      <section class="text-gray-400 bg-gray-900 body-font p-5 w-750 m-3">
        <table class="table-auto w-full text-left whitespace-no-wrap">
          <thead>
            <tr>
              <th class="px-4 py-3 title-font tracking-wider font-medium text-white text-sm bg-gray-800 rounded-tl rounded-bl">
                Liga ...
              </th>
              <th class="px-4 py-3 title-font tracking-wider font-medium text-white text-sm bg-gray-800">
                Resultado
              </th>
              <th class="px-4 py-3 title-font tracking-wider font-medium text-white text-sm bg-gray-800">
                1
              </th>
              <th class="px-4 py-3 title-font tracking-wider font-medium text-white text-sm bg-gray-800">
                X
              </th>
              <th class="px-4 py-3 title-font tracking-wider font-medium text-white text-sm bg-gray-800">
                2
              </th>
              <th class="px-4 py-3 title-font tracking-wider font-medium text-white text-sm bg-gray-800">
                Tiempo
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="px-4 py-3">
                {equipo1} vs {equipo2}
              </td>
              {/* <td class="px-4 py-3">
                {gol1} : {gol2}
              </td> */}
              <td class="px-4 py-3">-</td>
              <td class="px-4 py-3">-</td>
              <td class="px-4 py-3">-</td>
              <td class="px-4 py-3">-</td>
              {/* <td class="px-4 py-3">{tiempo}</td> */}
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  );
}

export default Cartas;
