import { useState } from "react";
import { useAuth } from "../../context/authContext";
import { AxiosError } from "axios";
import { useCitasAsesoria } from "../../context/citasAsesoriaContext";
import { agendarAsesoriaRequest } from "../../api/acompaniamiento";

function AgendadorAsesoriasEstudiante(){
    const { user } = useAuth();
    const { getProximasCitas } = useCitasAsesoria();
    const [tipoCita, setTipoCita] = useState();
    const [fecha, setFecha] = useState();

    const handleSubmit = async (e) => {
        try {
            e.preventDefault();
            const formatedDate = fecha.toISOString().split('T')[0] + " " + fecha.toISOString().split('T')[1].slice(0,-5);
            const res = await agendarAsesoriaRequest({DNI: user.username, tipo_cita: tipoCita, fecha: formatedDate});
            getProximasCitas(); // trigger re-render
        } catch (error) {
            if(error instanceof AxiosError) {
                alert(error.response.data.message);
            } else {
                alert(error);
            }
        }

    };

    return (
        <>
        <div className="rounded-wrapper">
            <h2 className="text-2xl font-bold m-4">Agendar Cita Asesoria</h2>

            <form onSubmit={handleSubmit}>
                <div className="flex items-center">
                    <div>
                        <label className="form-label">Tipo cita</label>
                        <select className="form-input" onChange={(e) => setTipoCita(e.target.value)}>
                            <option disabled selected value> -- selecciona una opción -- </option>
                            <option value= "CRISIS EMOCIONAL">Crisis Emocional</option>
                            <option value= "TRAMITES">Tramites</option>
                            <option value= "ACADEMICO">Academico</option>
                        </select>
                    </div>

                    <div>
                        <label className="form-label">Fecha y Hora</label>
                        <input className="form-input" type="datetime-local" onChange={(e) => {
                            const newDate = new Date(e.target.value);
                            newDate.setHours(newDate.getHours() -5);
                            setFecha(newDate);
                        }}/>
                    </div>

                    <button className="green-button" type="submit">Agendar Cita</button>
                </div>

            </form>

        </div>
        </>
    );
}

export default AgendadorAsesoriasEstudiante;