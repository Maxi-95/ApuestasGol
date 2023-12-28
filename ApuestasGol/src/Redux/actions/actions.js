import { APUESTAS_DEPOSTIVAS } from "./constantes";

// Acción para actualizar las apuestas
export const actualizarApuestas = (nuevasApuestas) => {
  return {
    type: APUESTAS_DEPOSTIVAS,
    payload: nuevasApuestas,
  };
};
