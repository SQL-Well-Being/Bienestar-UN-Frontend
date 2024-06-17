import { cancelarAsesoriaRequest } from "../../api/acompaniamiento";
import { useCitasAsesoria } from "../../context/citasAsesoriaContext";
import ListaAsesorias from "./ListaAsesorias";

function AsesoriasProximasEstudiante(){
    const {proximasCitas, getProximasCitas} = useCitasAsesoria();

    const handleClick = async (citId) => {
        await cancelarAsesoriaRequest(citId); // Req to delete the appointment from db
        getProximasCitas(); // Call to trigger component re-render
    };

    if(!proximasCitas){
        return <p>Loading...</p>
    }

    return (
        <>
            <ListaAsesorias title={"Mis próximas citas"} citas={proximasCitas} handleClick={handleClick}/>
        </>
    );
}

export default AsesoriasProximasEstudiante;