import { useParams } from "react-router-dom";
import AgendadorCitasSaludEstudiante from "./AgendadorCitasSaludEstudiante";
import CitasProximasEstudiante from "./CitasProximasEstudiante";

function InfoCitasSaludEstudiante(){

    return(
        <>
        <AgendadorCitasSaludEstudiante/>
        <CitasProximasEstudiante/>
        </>
    );
}

export default InfoCitasSaludEstudiante;