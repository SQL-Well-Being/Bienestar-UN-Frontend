import axios from "./axios";

export const getSeleccionesRequest = async () => axios.get(`/deporte/selecciones-deportivas`);
export const getSeleccionRequest = async (id) => axios.get(`/deporte/selecciones-deportivas/${id}`);
export const getConvocatoriasSeleccionesRequest = async () => axios.get(`/deporte/convocatorias-selecciones`);
export const getEntrenamientosSeleccionRequest = async (id) => axios.get(`/deporte/selecciones-deportivas/entrenamientos/${id}`);
export const getTorneosRequest = async () => axios.get(`/deporte/torneos`);
