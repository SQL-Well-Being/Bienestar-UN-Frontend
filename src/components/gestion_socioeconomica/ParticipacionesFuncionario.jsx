import { useEffect, useState } from "react";
import { getParticipacionesRequest, getConvocatoriaRequest } from "../../api/gestion";
import { useParams } from "react-router-dom";
import EditParticipacionForm from "./EditParticipacionForm";

function ParticipacionesFuncionario(){
    const [participaciones, setParticipaciones] = useState(null);
    const [convocatoria, setConvocatoria] = useState();
    const {conId} = useParams();

    useEffect(() => {
        const getParticipaciones = async () => {
            const res = await getParticipacionesRequest(conId);

            setParticipaciones(res.data);
        };

        getParticipaciones();

    }, [participaciones]);

    useEffect(() => {
        const getConvocatoria = async () => {
            const res = await getConvocatoriaRequest(conId);
            setConvocatoria(res.data);
        };

        getConvocatoria();
    }, []);


    if(!participaciones || !convocatoria){
        return <p>Loading...</p>;
    }

    return(
        <div className="rounded-wrapper">
            <h2 className="text-3xl font-bold">Participaciones: {convocatoria.con_esp_nombre}</h2>
            <div className="p-3">
                {participaciones.length === 0 ? <p>No hay participaciones en esta convocatoria</p> : participaciones.map(
                    (p) => {
                        return (
                            <EditParticipacionForm p={p} participacionSetter={setParticipaciones}/>
                        );
                    }
                )}
            </div>
        </div>
    );
}

export default ParticipacionesFuncionario;