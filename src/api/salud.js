import axios from "./axios";

export const getPerfilDeSaludRequest = async (DNI) => axios.get(`/salud/perfiles-de-salud/estudiante/${DNI}`);
export const putPerfilDeSaludRequest = async (id, data) => axios.put(`/salud/perfiles-de-salud/${id}`, data);
export const getProximasCitasEstudianteRequest = async (DNI) => axios.get(`/salud/citas-individuales?solo_proximas=1&est_DNI=${DNI}`);
export const getProximasCitasRequest = async () => axios.get(`/salud/citas-individuales?solo_proximas=1`);
export const agenderCitaRequest = async (cita) => axios.post("/salud/citas-individuales", cita);
export const cancelarCitaRequest = async (citId) => axios.delete(`/salud/citas-individuales/${citId}`);