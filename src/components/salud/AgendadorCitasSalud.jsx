import { useState } from "react";
import { agenderCitaRequest } from "../../api/salud";
import { useParams } from "react-router-dom";
import { useCitasSalud } from "../../context/citasSaludContext";

function AgendadorCitas(){
    const { getProximasCitas } = useCitasSalud();
    const [tipoCita, setTipoCita] = useState();
    const [fecha, setFecha] = useState();
    const params = useParams();

    const handleSubmit = async (e) => {
        try {
            e.preventDefault();
            fecha.setHours(fecha.getHours()-5);
            const formatedDate = fecha.toISOString().split('T')[0] + " " + fecha.toISOString().split('T')[1].slice(0,-5);
            await agenderCitaRequest({DNI: params.DNI, tipo_cita: tipoCita, fecha: formatedDate});
            getProximasCitas(); // trigger re-render
        } catch (error) {
            alert(e.message);
        }

    };

    return (
        <>
        <div className="scheduler-wrapper">
            <h2>Agendar Cita</h2>
            <div className="form-wrapper">
                <form onSubmit={handleSubmit}>
                    <select onChange={(e) => setTipoCita(e.target.value)}>
                        <option disabled selected value> -- selecciona una opción -- </option>
                        <option value= "Consulta Psicologica">Consulta Psicologica</option>
                        <option value= "Consulta Nutricional">Consulta Nutricional</option>
                        <option value= "Examen médico">Examen médico</option>
                    </select>

                    <input type="datetime-local" onChange={(e) => setFecha(new Date(e.target.value))}/>
                    <button type="submit">Agendar Cita</button>
                </form>
            </div>
        </div>
        </>
    );
}

export default AgendadorCitas;