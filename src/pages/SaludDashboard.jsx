import { useAuth } from "../context/authContext";
import SaludEstudianteDashboard from "../components/salud/SaludEstudianteDashboard";
import SaludFuncionarioDashboard from "../components/salud/SaludFuncionarioDashboard";
import Nav from "../components/Nav";

function SaludDashboard() {
    const { user } = useAuth();

    const loadDashboard = () => {
        if(user.role === "estudiante"){
            return <SaludEstudianteDashboard/>;
        } else if (user.role === "funcionario_bienestar") {
            return <SaludFuncionarioDashboard/>;
        }
    };

    return (
        <>
        <Nav/>
        {loadDashboard()}
        </>
    );

}

export default SaludDashboard;