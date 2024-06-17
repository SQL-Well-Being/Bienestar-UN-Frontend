import { useEffect, useState } from "react";
import { getConvocatoriasSeleccionesRequest } from "../../api/deporte";

const InfoConvocatoriasSelecciones = () => {
  const [convocatorias, setConvocatorias] = useState(null);

  useEffect(() => {
    const getConvocatorias = async () => {
      const res = await getConvocatoriasSeleccionesRequest();
      setConvocatorias(res.data[0]);
    };

    getConvocatorias();
  }, []);

  if (!convocatorias) {
    return <p>Loading...</p>;
  }

  return (
    <div className="rounded-wrapper">
      <h2 className="text-3xl font-bold">
        Convocatorias para selecciones deportivas
      </h2>
      <div className="flex flex-row flex-wrap content-start gap-x-[30px] gap-y-9 my-5 w-[1200px]">
        {convocatorias.map((c) => {
          return (
            <div className="bg-[#E6E6E6] h-[130px] w-[570px] rounded-[20px] p-2 ml-2">
              <p className=" text-xl font-bold hover:cursor-pointer hover:underline">
                {c.con_sel_descripcion}
              </p>
              <p className="text-lg">
                <b>Periodo: </b>
                {c.con_sel_periodo_academico}
              </p>
              <p className="text-lg">
                <b>Categoría: </b>
                {c.sel_categoria === "M" ? "Masculina" : "Femenina"}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default InfoConvocatoriasSelecciones;
