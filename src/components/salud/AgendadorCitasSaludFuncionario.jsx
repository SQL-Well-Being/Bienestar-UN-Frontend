import { useState } from "react";
import { agenderCitaRequest } from "../../api/salud";
import { AxiosError } from "axios";

function AgendadorCitasSaludFuncionario(){
    const [estDni, setEstDni] = useState();
    const [tipoCita, setTipoCita] = useState();
    const [fecha, setFecha] = useState();

    const handleSubmit = async (e) => {
        try {
            e.preventDefault();
            const formatedDate = fecha.toISOString().split('T')[0] + " " + fecha.toISOString().split('T')[1].slice(0,-5);
            const res = await agenderCitaRequest({DNI: estDni, tipo_cita: tipoCita, fecha: formatedDate});
            alert(res.data.message);
        } catch (error) {
            if(error instanceof AxiosError) {
                alert(error.response.data.message);
            } else {
                alert(error);
            }
        }
    };

    return(
        <>
        <div>
            <h2>Agendar Cita</h2>
            <div >
                <form onSubmit={handleSubmit}>
                    <input type="text" onChange={(e) => setEstDni(e.target.value)}></input>
                    <select onChange={(e) => setTipoCita(e.target.value)}>
                        <option disabled selected value> -- selecciona una opción -- </option>
                        <option value= "Consulta Psicologica">Consulta Psicologica</option>
                        <option value= "Consulta Nutricional">Consulta Nutricional</option>
                        <option value= "Examen médico">Examen médico</option>
                    </select>

                    <input type="datetime-local" onChange={(e) => {
                        const newDate = new Date(e.target.value);
                        newDate.setHours(newDate.getHours() -5);
                        setFecha(newDate);
                    }}/>
                    <button type="submit">Agendar Cita</button>
                </form>
            </div>
        </div>
        </>
    );
}

export default AgendadorCitasSaludFuncionario;