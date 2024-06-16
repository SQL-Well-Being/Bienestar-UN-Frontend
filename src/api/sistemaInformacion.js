import axios from "./axios";

export const getInfoEstudianteRequest = async (DNI) => axios.get(`/sistema-de-informacion/estudiante/${DNI}`);