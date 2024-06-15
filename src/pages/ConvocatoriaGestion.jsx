import Nav from "../components/Nav";
import InfoConvocatoriaEstudiante from "../components/gestion_socioeconomica/InfoConvocatoriaEstudiante";
import { useAuth } from "../context/authContext";

function ConvocatoriaGestion(){
    const { user } = useAuth();

    const loadPage = () => {
        if(user.role === "estudiante"){
            return (
                <InfoConvocatoriaEstudiante/>
            );
        }
    };

    return (
        <>
            <Nav/>
            {loadPage()}
        </>
    );

}

export default ConvocatoriaGestion;