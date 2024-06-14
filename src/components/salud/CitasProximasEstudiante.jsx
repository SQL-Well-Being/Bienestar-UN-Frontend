import { useCitasSalud } from "../../context/citasSaludContext";
import { cancelarCitaRequest } from "../../api/salud";
import ListaCitasSalud from "./ListaCitasSalud";


function CitasProximasEstudiante(){
    const {proximasCitas, getProximasCitas} = useCitasSalud();

    const handleClick = async (citId) => {
        await cancelarCitaRequest(citId); // Req to delete the appointment from db
        getProximasCitas(); // Call to trigger component re-render
    };

    if(!proximasCitas){
        return <p>Loading...</p>
    }

    return (
        <>
            <ListaCitasSalud title={"Mis próximas citas"} citas={proximasCitas} handleClick={handleClick}/>
        </>
    );
}

export default CitasProximasEstudiante;