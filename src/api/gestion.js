import axios from "./axios";

export const getConvocatoriasActivasRequest = async (periodo) => axios.get(`/gestion-socioeconomica/convocatorias/periodo/${periodo}?activas=1`);
export const getConvocatoriasInactivasRequest = async () => axios.get(`/gestion-socioeconomica/convocatorias/inactivas`);
export const getConvocatoriaRequest = async (id) => axios.get(`/gestion-socioeconomica/convocatorias/${id}`);
export const getParticipacionesEstudianteRequest = async (periodo, DNI) => axios.get(`/gestion-socioeconomica/convocatorias/periodo/${periodo}/participaciones?est_DNI=${DNI}`);
export const postParticipacionRequest = async (conId, participacion) => axios.post(`/gestion-socioeconomica/convocatorias/${conId}/participaciones`, participacion);
export const getBeneficiosEstudianteRequest = async (DNI) => axios.get(`/gestion-socioeconomica/convocatorias/beneficiarios/${DNI}`);
export const getBeneficiariosConvocatoriaRequest = async (id) => axios.get(`/gestion-socioeconomica/convocatorias/${id}/beneficiarios`);
export const getBeneficiariosRequest = async () => axios.get("/gestion-socioeconomica/convocatorias/beneficiarios");
export const getParticipacionesRequest = async (id) => axios.get(`/gestion-socioeconomica/convocatorias/${id}/participaciones`);
export const putParticipacionRequest = async (conId, DNI, estado) => axios.put(`/gestion-socioeconomica/convocatorias/${conId}/participaciones/${DNI}`, estado);