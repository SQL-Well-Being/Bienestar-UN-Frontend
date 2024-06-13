import { useAuth } from "../context/authContext";
import SaludEstudianteDashboard from "../components/salud/SaludEstudianteDashboard";
import SaludFuncionarioDashboard from "../components/salud/SaludFuncionarioDashboard";

function SaludDashboard() {
    const { user } = useAuth();

    if(user.role === "estudiante"){
        return <SaludEstudianteDashboard/>;
    } else {
        return <SaludFuncionarioDashboard/>;
    }
}

export default SaludDashboard;