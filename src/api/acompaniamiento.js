import axios from "./axios";

export const getProximasAsesoriasEstudianteRequest = async (DNI) => axios.get(`/acompaniamiento-integral/citas-asesoria?solo_proximas=1&est_DNI=${DNI}`);
export const getProximasAsesoriasRequest = async () => axios.get(`/acompaniamiento-integral/citas-asesoria?solo_proximas=1`);