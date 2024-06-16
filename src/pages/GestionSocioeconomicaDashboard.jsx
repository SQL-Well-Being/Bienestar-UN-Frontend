import Nav from "../components/Nav";
import GestionEstudianteDashboard from "../components/gestion_socioeconomica/GestionEstudianteDashboard";
import GestionFuncionarioDashboard from "../components/gestion_socioeconomica/GestionFuncionarioDashboard";
import { useAuth } from "../context/authContext";

function GestionSocioeconomicaDashboard(){
    const { user } = useAuth();

    const loadDashboard = () => {

        if(user.role === "estudiante"){
            
            return <GestionEstudianteDashboard/>;

        } else if (user.role === "funcionario_bienestar"){

            return <GestionFuncionarioDashboard/>;
        }
    };

    return (
        <>
            <Nav/>
            {loadDashboard()}
        </>
    );
}

export default GestionSocioeconomicaDashboard;