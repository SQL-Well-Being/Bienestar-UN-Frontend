import { useEffect, useState } from "react";
import { getParticipacionesEstudianteRequest } from "../../api/gestion";
import { useAuth } from "../../context/authContext";
import { Link } from "react-router-dom";

function InfoParticipacionesEstudiante() {
    const [participaciones, setParticipaciones] = useState(null);
    const { user } = useAuth();

    useEffect(() => {
        const getParticipaciones = async () => {
            const d = new Date(Date.now());
            const periodo = `${d.getFullYear()}-${d.getMonth() + 1 < 6 ? 1 : 2}`;
            const res = await getParticipacionesEstudianteRequest(periodo, user.username);

            setParticipaciones(res.data);
        };

        getParticipaciones();
    }, []);

    if(!participaciones){
        return <p>Loading...</p>;
    }

    return(
        <>
        <div className="rounded-wrapper">
            <h2 className="text-3xl font-bold">Mis participaciones</h2>
            <div className="p-3">
                {participaciones.length === 0 ? <p> No has participado en ninguna convocatoria de gestión socioeconomica</p> : participaciones.map(
                    (p) => {
                        return (
                            <div className="bg-[#E6E6E6] rounded-[20px] p-2 w-[635px] mt-5 ml-2">
                                <span className="text-xl font-bold hover:cursor-pointer hover:underline">
                                    <Link to={`/gestion-socioeconomica/convocatorias/${p.con_esp_id}`}>{p.con_esp_nombre}</Link>
                                </span>
                                <p><b>Periodo: </b>{p.con_gen_periodo_academico}</p>
                                <p><b>Estado: </b>{p.con_esp_estado}</p>
                            </div>
                        );
                    }
                )}
            </div>

        </div>
        </>
    );
}

export default InfoParticipacionesEstudiante;