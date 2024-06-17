import { useEffect, useState } from "react";
import { useAuth } from "../../context/authContext";
import { getEventosRequest, getInfoEstudianteRequest } from "../../api/sistemaInformacion";

function DashboardEstudiante(){
    const { user } = useAuth();
    const [estudiante, setEstudiante] = useState(null);
    const [eventos, setEventos] = useState(null);

    useEffect(() => {
        const getEstudiante = async () =>{
            const res = await getInfoEstudianteRequest(user.username);
            setEstudiante(res.data)
        };

        getEstudiante();
    }, []);

    useEffect(() => {
        const getEventos = async () => {
            const res = await getEventosRequest();
            setEventos(res.data);
        };

        getEventos();
    }, []);

    if(!estudiante){
        return <p>Loading...</p>;
    }

    return (
        <>
            <div className="flex flex-row flex-wrap">
                <div className="rounded-wrapper w-[950px] ">
                    <h2 className="text-3xl  font-bold">Mi perfil</h2>
                    <div className="my-5">
                        <h3 className="text-2xl">{estudiante.est_nombre}</h3>
                        <span className="text-sm italic  text-[#666666] ">{estudiante.pro_nombre}</span>
                        
                        <div className="my-5 text-base">
                            <p className="mt-2"><b>ACTIVO: </b>{estudiante.hist_es_activa === 0 ? "NO" : "SI"}</p>
                            <p className="mt-2"><b>PBM: </b>{estudiante.est_pbm}</p>
                            <p className="mt-2"><b>PEAMA: </b>{estudiante.est_es_peama === 0 ? "NO" : "SI"}</p>
                            <p className="mt-2"><b>PAES: </b>{estudiante.est_es_paes === 0 ? "NO" : "SI"}</p>
                        </div>
                    </div>
                </div>

                <div className="rounded-wrapper w-[500px] ml-5 h-[580px] p-3 ">
                    <h2 className="text-3xl font-bold">Próximos Eventos</h2>
                    <div className= "overflow-y-scroll h-[500px] p-1">
                        {eventos.map(
                            (e) => {
                                return (
                                    <div className="bg-[#E6E6E6] rounded-[20px] p-3 mt-5">
                                        <h3 className=" text-xl font-bold">{e.nombre}</h3>
                                        <p className="mt-2 text-base">{e.descripcion}</p>
                                        <p className="mt-2 text-base"><b>Fecha: </b>{e.fecha.split("T")[0]}</p>
                                        <p className="mt-2 text-base"><b>Hora: </b>{`${e.hora_inicio} - ${e.hora_fin}`}</p>
                                        <p className="mt-2 text-base italic ">Invita: {e.area}</p>
                                    </div>
                                );
                            }
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}

export default DashboardEstudiante;