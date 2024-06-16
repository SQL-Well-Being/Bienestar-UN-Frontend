import { useEffect, useState } from "react";
import { getAsistenciaTallerCulturalRequest } from "../../api/cultura";
import { useParams } from "react-router-dom";

const AsistenciaTallerCultural = () => {
  const [asistencia, setAsistencia] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const getAsistencia = async () => {
      const res = await getAsistenciaTallerCulturalRequest(id);
      setAsistencia(res.data[0]);
    };

    getAsistencia();
  }, []);

  if (!asistencia) {
    return <p>Loading...</p>;
  }

  return (
    <div className="rounded-wrapper h-[600px]">
      <h2 className="text-2xl font-bold mb-2">Asistentes</h2>
        {asistencia.map((t) => {
          return (
            <div className="mb-4">
              <p className="text-lg">
                <b>Nombre: </b>
                {t.per_primer_nombre} {t.per_primer_apellido}
              </p>
              <p className="text-lg">
                <b>Documento: </b>
                {t.est_per_DNI}
              </p>
            </div>
          );
        })}
    </div>
  );
};

export default AsistenciaTallerCultural;
