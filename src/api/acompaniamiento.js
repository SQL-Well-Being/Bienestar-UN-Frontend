import axios from "./axios";

export const getProximasAsesoriasEstudianteRequest = async (DNI) => axios.get(`/acompaniamiento-integral/citas-asesoria?solo_proximas=1&est_DNI=${DNI}`);
export const getProximasAsesoriasRequest = async () => axios.get(`/acompaniamiento-integral/citas-asesoria?solo_proximas=1`);
export const agendarAsesoriaRequest = async (data) => axios.post("/acompaniamiento-integral/citas-asesoria", data);
export const cancelarAsesoriaRequest = async (id) => axios.delete(`/acompaniamiento-integral/citas-asesoria/${id}`);