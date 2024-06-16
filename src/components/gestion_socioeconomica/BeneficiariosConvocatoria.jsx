import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getBeneficiariosConvocatoriaRequest, getConvocatoriaRequest } from "../../api/gestion";

function BeneficiariosConvocatoria(){
    const [beneficiarios, setBeneficiarios] = useState();
    const [convocatoria, setConvocatoria] = useState();
    const { conId } = useParams();

    useEffect(() => {
        const getBeneficiarios = async () => {
            const res = await getBeneficiariosConvocatoriaRequest(conId);
            setBeneficiarios(res.data);
        };

        getBeneficiarios();
    }, []);

    useEffect(() => {
        const getConvocatoria = async () => {
            const res = await getConvocatoriaRequest(conId);
            setConvocatoria(res.data);
        };

        getConvocatoria();
    }, []);

    if(!beneficiarios || !convocatoria){
        return <p>Loading...</p>;
    }

    return (
        <div className="rounded-wrapper">
            <h2 className="text-3xl font-bold">Beneficiarios: {convocatoria.con_esp_nombre}</h2>
            <div className="p-3">
                {beneficiarios.length === 0 ? <p>No hay beneficiarios de esta convocatoria</p> : beneficiarios.map(
                    (b) => {
                        return(
                            <div className="bg-[#E6E6E6] rounded-[20px] p-2 w-[635px] mt-5 ml-2">
                                <span className="text-xl font-bold">{b.est_nombre}</span>
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

export default BeneficiariosConvocatoria;