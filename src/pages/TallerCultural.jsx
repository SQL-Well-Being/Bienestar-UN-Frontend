import Nav from "../components/Nav";
import InfoTallerCulturalEstudiante from "../components/cultura/InfoTallerCulturalEstudiante";
import InfoTallerCulturalFuncionario from "../components/cultura/InfoTallerCulturalFuncionario";
import { useAuth } from "../context/authContext";

function TallerCultural(){
    const { user } = useAuth();

    const loadPage = () => {
        if(user.role === "estudiante"){
            return <InfoTallerCulturalEstudiante/>;
        } else if(user.role === "funcionario_bienestar"){
            return <InfoTallerCulturalFuncionario/>;
        }
    };

    return (
        <>
            <Nav/>
            {loadPage()}
        </>
    );

}

export default TallerCultural;