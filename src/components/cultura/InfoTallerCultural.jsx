import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getTallerCulturalRequest } from "../../api/cultura";

function InfoTallerCultural() {
  const { id } = useParams();
  const [taller, setTaller] = useState(null);

  useEffect(() => {
    const getTaller = async () => {
      const res = await getTallerCulturalRequest(id);
      setTaller(res.data[0]);
    };

    getTaller();
  }, []);

  if (!taller) {
    return <p>Loading...</p>;
  }

  const fechaInicio = new Date(taller.res_fecha_inicial);
  const fechaFinal = new Date(taller.res_fecha_fin);

  const fechaFormateada = fechaInicio.toLocaleDateString();
  const horaInicioFormateada = fechaInicio.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
  const horaFinalFormateada = fechaFinal.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <>
      <h2 className="text-3xl font-bold">{taller.tall_nombre}</h2>
      <p className="mt-5">
        <b>Fecha: </b>
        {fechaFormateada}
      </p>
      <p className="mt-5">
        <b>Hora inicio: </b>
        {horaInicioFormateada}
      </p>
      <p className="mt-5">
        <b>Hora fin: </b>
        {horaFinalFormateada}
      </p>
      <p className="mt-5">
        <b>Tallerista: </b>
        {taller.per_primer_nombre} {taller.per_primer_apellido}
      </p>
      <p className="mt-5">
        <b>Edificio: </b>
        {taller.edi_nombre}
      </p>
      <p className="mt-5">
        <b>Espacio: </b>
        {taller.esp_nombre}
      </p>
    </>
  );
}

export default InfoTallerCultural;
