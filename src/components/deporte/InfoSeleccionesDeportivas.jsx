import { useEffect, useState } from "react";
import { getSeleccionesRequest } from "../../api/deporte";

const InfoSeleccionesDeportivas = () => {
  const [selecciones, setSelecciones] = useState(null);

  useEffect(() => {
    const getSelecciones = async () => {
      const res = await getSeleccionesRequest();
      setSelecciones(res.data);
    };

    getSelecciones();
  }, []);

  if (!selecciones) {
    return <p>Loading...</p>;
  }

  return (
    <div className="rounded-wrapper">
      <h2 className="text-3xl font-bold">Selecciones deportivas</h2>
      <div className="flex flex-row flex-wrap content-start gap-x-[30px] gap-y-9 my-5 w-[1200px]">
        {selecciones.map((s) => {
          return (
            <div
              className="bg-[#E6E6E6] h-[95px] w-[570px] rounded-[20px] p-2 ml-2"
            >
              <p className=" text-xl font-bold">
                {s.sel_nombre}
              </p>
              <p className="text-lg">
                <b>Entrenador: </b>
                {s.per_primer_nombre} {s.per_primer_apellido}
              </p>
              <p className="text-lg">
                <b>Categoría: </b>
                {s.sel_categoria === "M" ? "Masculina" : "Femenina"}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default InfoSeleccionesDeportivas;
