import { useEffect, useState } from "react";
import { useAuth } from "../../context/authContext";
import { getBeneficiosEstudianteRequest } from "../../api/gestion";
import { Link } from "react-router-dom";

function BeneficiosEstudiante(){
    const [beneficios, setBeneficios] = useState(null);
    const { user } = useAuth();

    useEffect(() => {
        const getBeneficios = async () => {
            const res = await getBeneficiosEstudianteRequest(user.username);
            setBeneficios(res.data);
        }

        getBeneficios();
    }, []);

    if(!beneficios){
        return <p>Loading...</p>;
    }

    return(
        <div className="rounded-wrapper">
            <h2 className="text-3xl font-bold">Mis beneficios</h2>

            <div className="p-3">
                {beneficios.length === 0 ? <p>No tienes beneficios adjudicados</p> : beneficios.map(
                    (b) => {
                        return (
                            <div className="bg-[#E6E6E6] rounded-[20px] p-2 w-[635px] mt-5 ml-2">
                                <span className="text-xl font-bold hover:cursor-pointer hover:underline">
                                    <Link to={`/gestion-socioeconomica/convocatorias/${b.con_esp_id}`}>{b.con_esp_nombre}</Link>
                                </span>
                                <p><b>Periodo: </b>{b.ben_periodo_academico}</p>
                                <p>
                                    <b>Estado: </b>
                                    {b.con_gen_activa === 1 ? <span className=" text-green-500 ">ACTIVO</span> : <span className=" text-red-500 ">CADUCADO</span>}
                                </p>
                            </div>
                        );
                    }
                )}
            </div>
        </div>
    );
}

export default BeneficiosEstudiante;