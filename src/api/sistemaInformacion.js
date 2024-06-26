import axios from "./axios";

export const getInfoEstudianteRequest = async (DNI) => axios.get(`/sistema-de-informacion/estudiante/${DNI}`);
export const getEventosRequest = async () => axios.get("/sistema-de-informacion/eventos-proximos");