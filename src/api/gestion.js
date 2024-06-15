import axios from "./axios";

export const getConvocatoriasAbiertasRequest = async (periodo) => axios.get(`/gestion-socioeconomica/convocatorias/periodo/${periodo}?solo_abiertas=1`);
export const getConvocatoriaRequest = async (id) => axios.get(`/gestion-socioeconomica/convocatorias/${id}`);
export const getParticipacionesEstudianteRequest = async (periodo, DNI) => axios.get(`/gestion-socioeconomica/convocatorias/periodo/${periodo}/participaciones?est_DNI=${DNI}`);
export const postParticipacionRequest = async (conId, participacion) => axios.post(`/gestion-socioeconomica/convocatorias/${conId}/participaciones`, participacion);