import Nav from "../components/Nav";
import InfoConvocatoriaEstudiante from "../components/gestion_socioeconomica/InfoConvocatoriaEstudiante";
import InfoConvocatoriaFuncionario from "../components/gestion_socioeconomica/InfoConvocatoriaFuncionario";
import { useAuth } from "../context/authContext";

function ConvocatoriaGestion(){
    const { user } = useAuth();

    const loadPage = () => {
        if(user.role === "estudiante"){
            return <InfoConvocatoriaEstudiante/>;
        } else if(user.role === "funcionario_bienestar"){
            return <InfoConvocatoriaFuncionario/>;
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