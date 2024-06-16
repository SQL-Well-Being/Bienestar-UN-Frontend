import { useEffect, useState } from "react";
import { useAuth } from "../../context/authContext";
import { getInfoEstudianteRequest } from "../../api/sistemaInformacion";

function DashboardEstudiante(){
    const { user } = useAuth();
    const [estudiante, setEstudiante] = useState(null);

    useEffect(() => {
        const getEstudiante = async () =>{
            const res = await getInfoEstudianteRequest(user.username);
            setEstudiante(res.data)
        };

        getEstudiante();
    }, []);

    if(!estudiante){
        return <p>Loading...</p>;
    }

    return (
        <>
            <div className="flex flex-row flex-wrap">
                <div className="rounded-wrapper w-[700px] ">
                    <h2 className="text-3xl  font-bold">Mi perfil</h2>
                    <div className="my-5">
                        <h3 className="text-2xl">{estudiante.est_nombre}</h3>
                        <span className="text-sm italic  text-[#666666] ">{estudiante.pro_nombre}</span>
                        
                        <div className="my-5 text-base">
                            <p className="mt-2"><b>PBM: </b>{estudiante.est_pbm}</p>
                            <p className="mt-2"><b>PEAMA: </b>{estudiante.est_es_peama === 0 ? "NO" : "SI"}</p>
                            <p className="mt-2"><b>PAES: </b>{estudiante.est_es_paes === 0 ? "NO" : "SI"}</p>
                        </div>
                    </div>
                </div>

                <div className="rounded-wrapper w-[700px] ">
                    <h2 className="text-3xl font-bold">Próximos Eventos</h2>
                </div>
            </div>
        </>
    );
}

export default DashboardEstudiante;