import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getConvocatoriaRequest } from "../../api/gestion";

function InfoConvocatoriaGestion(){
    const {conId} = useParams();
    const [convocatoria, setConvocatoria] = useState(null);

    useEffect(() => {
        const getConvocatoria = async () => {
            const res = await getConvocatoriaRequest(conId);
            setConvocatoria(res.data);
        };

        getConvocatoria();
    }, []);

    if(!convocatoria){
        return <p>Loading...</p>;
    }

    return (
        <>
            <h2 className="text-3xl font-bold">{convocatoria.con_esp_nombre}</h2>
            <p className="mt-5"><b>Código: </b>{convocatoria.con_gen_codigo}</p>
            <p className="mt-5"><b>Estado: </b>
                {convocatoria.con_gen_activa === 0 ? <span className=" text-red-500">INACTIVA</span> : <span className="text-green-500">ACTIVA</span>}
            </p>
            <p className="mt-5"><b>Abierta: </b>
                {convocatoria.con_gen_abierta === 0 ? "NO" : "SI"}
            </p>
            <p className="mt-5"><b>Periodo académico: </b>{convocatoria.con_gen_periodo_academico}</p>
            <p className="mt-5"><b>Horas de corresponsabilidad: </b>{convocatoria.con_gen_horas_de_corresponsabilidad}</p>
            <span className="mt-5 font-bold block">Descripción:</span>
            <p className="mt-5">{convocatoria.con_esp_descripcion}</p>

        </>
    );

}

export default InfoConvocatoriaGestion;