import { useEffect, useState } from "react";
import { getTalleresCulturalesRequest } from "../../api/cultura";
import { Link } from "react-router-dom";

const InfoTalleresCulturales = () => {
  const [talleres, setTalleres] = useState(null);

  useEffect(() => {
    const getTalleres = async () => {
      const res = await getTalleresCulturalesRequest();
      setTalleres(res.data);
    };

    getTalleres();
  }, []);

  if (!talleres) {
    return <p>Loading...</p>;
  }

  return (
    <div className="rounded-wrapper">
      <h2 className="text-3xl font-bold">Talleres culturales</h2>
      <div className="flex flex-row flex-wrap content-start gap-x-[30px] gap-y-9 my-5 w-[1200px]">
        {talleres.map((t) => {
          const fecha = new Date(t.res_fecha_inicial);
          const fechaFormateada = fecha.toLocaleDateString();
          const horaFormateada = fecha.toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          });

          return (
            <div
              key={t.tall_nombre}
              className="bg-[#E6E6E6] h-[95px] w-[570px] rounded-[20px] p-2 ml-2"
            >
              <span className=" text-xl font-bold hover:cursor-pointer hover:underline">
                <Link to={`/cultura/talleres-culturales/${t.tall_eve_id}`}>
                  {t.tall_nombre}
                </Link>
              </span>
              <p className="text-lg">
                <b>Fecha: </b>
                {fechaFormateada}
              </p>
              <p className="text-lg">
                <b>Hora: </b>
                {horaFormateada}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default InfoTalleresCulturales;
