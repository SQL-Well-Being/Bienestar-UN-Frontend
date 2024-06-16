import { AxiosError } from "axios";
import { useState } from "react";
import { putParticipacionRequest } from "../../api/gestion";

function EditParticipacionForm({p, participacionSetter}){
    const [estado, setEstado] = useState(p.con_esp_estado);

    const handleSubmit = async (e) =>{
        e.preventDefault();
        try {
            await putParticipacionRequest(p.con_esp_id, p.est_per_DNI, {estado: estado});
            participacionSetter(null); // trigger re render due to useEffect dependencies in PartitiipacionesFuncionario

        } catch (error) {
            if(error instanceof AxiosError){
                alert(error.data.message);
            } else {
                alert(error);
            }
        }
    };

    return (
        <>
            <div className="bg-[#E6E6E6] rounded-[20px] p-2  mt-5 ml-2 flex flex-row gap-x-10">
                <div className="w-[360px]">
                    <h3 className="text-xl font-bold">{p.est_nombre}</h3>
                    <p><b>DNI: </b>{p.est_per_DNI}</p>
                </div>

                <form onSubmit={handleSubmit}>
                    <div className="flex flex-row gap-x-[150px] ">
                        <div>
                            <label className="form-label">Estado de participacion</label>
                            <select className="form-input" disabled={p.con_gen_activa === 0} onChange={(e) => setEstado(e.target.value)}>
                                <option value="PREADJUDICADO" selected={p.con_esp_estado === "PREADJUDICADO"}>PREADJUDICADO</option>
                                <option value="ELEGIBLE" selected={p.con_esp_estado === "ELEGIBLE"}>ELEGIBLE</option>
                                <option value="ADJUDICADO" selected={p.con_esp_estado === "ADJUDICADO"}>ADJUDICADO</option>
                                <option value="INVALIDADO" selected={p.con_esp_estado === "INVALIDADO"}>INVALIDADO</option>
                                <option value="FORMALIZADO" selected={p.con_esp_estado === "FORMALIZADO"}>FORMALIZADO</option>
                            </select>
                        </div>

                        <button type="submit" className="green-button" disabled={p.con_gen_activa === 0}>
                            Actualizar Estado
                            </button>
                    </div>

                </form>
            </div>
        </>
    );
}

export default EditParticipacionForm;