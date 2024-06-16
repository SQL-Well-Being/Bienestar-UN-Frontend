import { useEffect, useState } from "react";
import { getBeneficiariosRequest } from "../../api/gestion";
import { Link } from "react-router-dom";

function Beneficiarios(){
    const [beneficiarios, setBeneficiarios] = useState();

    useEffect(() => {
        const getBeneficiarios = async () => {
            const res = await getBeneficiariosRequest();
            setBeneficiarios(res.data);
        };

        getBeneficiarios();
    }, []);


    if(!beneficiarios){
        return <p>Loading...</p>;
    }

    return (
        <div className="rounded-wrapper">
            <h2 className="text-3xl font-bold">Beneficiarios programa de gestión</h2>
            <div className="p-3">
                {beneficiarios.length === 0 ? <p>No hay beneficiarios de esta convocatoria</p> : beneficiarios.map(
                    (b) => {
                        return(
                            <div className="bg-[#E6E6E6] rounded-[20px] p-2 w-[635px] mt-5 ml-2">
                                <span className="text-xl font-bold hover:cursor-pointer hover:underline block">
                                    <Link to={`/gestion-socioeconomica/convocatorias/${b.con_esp_id}`}>{b.con_esp_nombre}</Link>
                                </span>
                                <p><b>Nombre: </b>{b.est_nombre}</p>
                                <p><b>DNI: </b>{b.ben_est_per_DNI}</p>
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


export default Beneficiarios;