import axios from "./axios";

export const getGAIRequest = async () => axios.get(`/cultura/GAI`);
export const getTalleresCulturalesRequest = async () => axios.get(`/cultura/talleres-culturales`);
export const getTallerCulturalRequest = async (id) => axios.get(`/cultura/talleres-culturales/${id}`);
export const getConvocatoriasGAIRequest = async () => axios.get(`/cultura/convocatorias-gai`);
export const getEstudiantesPertenecenGAIRequest = async (id) => axios.get(`/cultura/gai/estudiantes/${id}`);
export const getAsistenciaTallerCulturalRequest = async (id) => axios.get(`/cultura/talleres-culturales/asistencia/${id}`);
export const postAsistenciaTallerCulturalRequest = async (id, DNI) => axios.post(`/cultura/talleres-culturales/asistencia/${id}`, DNI);
