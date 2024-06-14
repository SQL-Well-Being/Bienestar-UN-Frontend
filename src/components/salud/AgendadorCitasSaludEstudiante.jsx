import { useState } from "react";
import { agenderCitaRequest } from "../../api/salud";
import { useCitasSalud } from "../../context/citasSaludContext";
import { useAuth } from "../../context/authContext";
import { AxiosError } from "axios";

function AgendadorCitasSaludEstudiante(){
    const { user } = useAuth();
    const { getProximasCitas } = useCitasSalud();
    const [tipoCita, setTipoCita] = useState();
    const [fecha, setFecha] = useState();

    const handleSubmit = async (e) => {
        try {
            e.preventDefault();
            const formatedDate = fecha.toISOString().split('T')[0] + " " + fecha.toISOString().split('T')[1].slice(0,-5);
            const res = await agenderCitaRequest({DNI: user.username, tipo_cita: tipoCita, fecha: formatedDate});
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
            <h2 className="text-2xl font-bold m-4">Agendar Cita</h2>

            <form onSubmit={handleSubmit}>
                <div className="flex items-center">
                    <div>
                        <label className="form-label">Tipo cita</label>
                        <select className="form-input" onChange={(e) => setTipoCita(e.target.value)}>
                            <option disabled selected value> -- selecciona una opción -- </option>
                            <option value= "Consulta Psicologica">Consulta Psicologica</option>
                            <option value= "Consulta Nutricional">Consulta Nutricional</option>
                            <option value= "Examen médico">Examen médico</option>
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

export default AgendadorCitasSaludEstudiante;