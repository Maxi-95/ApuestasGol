import { APUESTAS_DEPOSTIVAS } from "../actions/constantes";

const initialState = {
  apuestas: [
    {
      equipo1: "uruguay",
      equipo2: "paraguay",
    },
    {
      equipo1: "peru",
      equipo2: "brazil",
    },
    {
      equipo1: "brazil",
      equipo2: "paraguay",
    },
    {
      equipo1: "uruguay",
      equipo2: "brazil",
    },
    {
      equipo1: "uruguay",
      equipo2: "peru",
    },
  ],
};

const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case APUESTAS_DEPOSTIVAS:
      return {
        ...state,
        apuestas: state.apuestas,
      };
    default:
      return { ...state };
  }
};

export default rootReducer;
