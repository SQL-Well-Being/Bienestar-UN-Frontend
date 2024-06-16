import { useEffect, useState } from "react";
import { getConvocatoriasActivasRequest, getConvocatoriasInactivasRequest} from "../../api/gestion";
import { Link } from "react-router-dom";

function InfoConvocatoriasGestion({activas}){
    const [convocatorias, setConvocatorias] = useState(null);

    useEffect(() => {
        const getConvocatorias = async () =>{
            const d = new Date(Date.now());
            const periodo = `${d.getFullYear()}-${d.getMonth() + 1 < 6 ? 1 : 2}`;
            const res = activas ? await getConvocatoriasActivasRequest(periodo) : await getConvocatoriasInactivasRequest();
            setConvocatorias(res.data);
        };

        getConvocatorias();

    }, [activas]);

    if(!convocatorias){
        return <p>Loading...</p>;
    }

    return (
        <div className="rounded-wrapper">
            <h2 className="text-3xl font-bold">Convocatorias {activas ? "Activas" : "Inactivas"}</h2>
            <div className="flex flex-row flex-wrap content-start gap-x-[30px] gap-y-9 my-5 w-[1200px]">
                {convocatorias.map((c) => {
                    return (
                        <div className="bg-[#E6E6E6] h-[95px] w-[570px] rounded-[20px] p-2 ml-2">
                            <span className=" text-xl font-bold hover:cursor-pointer hover:underline">
                                <Link to={`/gestion-socioeconomica/convocatorias/${c.con_esp_id}`}>{c.con_esp_nombre}</Link>
                            </span>
                            <p className="text-lg"><b>Periodo: </b>{c.con_gen_periodo_academico}</p>
                        </div>
                    );
                })}
            </div>

        </div>
    );
}

export default InfoConvocatoriasGestion;