const { Videogame, Genres } = require("../db");
const axios = require("axios");
const { YOUR_API_KEY } = process.env;

//######### TRAEMOS LOS JUEGOS DE LA API  #########
const ApiPartidos = async () => {
  try {
    const headers = {
      "X-Auth-Token": YOUR_API_KEY, // Agrega la clave de API como encabezado
    };

    const infoApi = await axios.get(
      `https://api.football-data.org/v4/competitions/CL/matches`,
      { headers }
    );
    return infoApi.data;
  } catch (error) {
    return "error :" + " " + error.message;
  }
};

//######### TRAEMOS LOS JUEGOS DE LA BASE DE DATOS  #########

const BDJuegos = async () => {
  // try {
  //    const bdJuegos = await Videogame.findAll({
  //       include: [
  //          { model: Genres}  // renderizamos tambien los generos generos cuando usamos el metodo findAll() al mostrar los juegos
  //        ]
  //   })
  //    return bdJuegos;
  // } catch (error) {
  //    return "error :" + " " + error.message;
  // }
};

//######### CONCATENAMOS LOS JUEGOS DE LA API Y DE LA BD Y LOS RETORNAMOS #########
const todosJuegos = async () => {
  // try {
  //    const juegosBD = await BDJuegos();
  //    const juegosApi = await ApiJuegos();
  //    const result = [...juegosApi, ...juegosBD] // metodo de concatenacion con print operator
  //    return result;
  // } catch (error) {
  //    console.log({error: error.message});
  //    return "error :" + " " + error.message;
  // }
};

module.exports = {
  ApiPartidos,
};
