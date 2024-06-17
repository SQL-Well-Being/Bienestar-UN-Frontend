import { CitasAsesoriaProvider } from "../../context/citasAsesoriaContext";
import { useAuth } from "../../context/authContext";
import  InfoAsesoriasEstudiante  from "./InfoAsesoriasEstudiante";

function AcompaniamientoEstudianteDashboard(){
    const { user } = useAuth();
    return (
        <CitasAsesoriaProvider DNI={user.username}>
            <InfoAsesoriasEstudiante/>
        </CitasAsesoriaProvider>
    );
}

export default AcompaniamientoEstudianteDashboard;