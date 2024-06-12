import axios from "./axios";

export const getPerfilDeSaludRequest = async (DNI) => axios.get(`/salud/perfiles-de-salud/estudiante/${DNI}`);
export const getProximasCitasRequest = async (DNI) => axios.get(`/salud/citas-individuales?solo_proximas=1&est_DNI=${DNI}`);
export const agenderCitaRequest = async (cita) => axios.post("/salud/citas-individuales", cita);
export const cancelarCitaRequest = async (citId) => axios.delete(`/salud/citas-individuales/${citId}`);