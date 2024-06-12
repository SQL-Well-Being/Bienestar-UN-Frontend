import { useParams } from "react-router-dom";
import AgendadorCitas from "./AgendadorCitasSalud";
import CitasProximas from "./CitasProximas";

function InfoCitasSalud(){
    const params = useParams();

    return(
        <>
        <AgendadorCitas/>
        <CitasProximas/>
        </>
    );
}

export default InfoCitasSalud;