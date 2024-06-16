import Nav from "../components/Nav";
import CulturaEstudianteDashboard from "../components/cultura/CulturaEstudianteDashboard";
import CulturaFuncionarioDashboard from "../components/cultura/CulturaFuncionarioDashboard";
import { useAuth } from "../context/authContext";

function CulturaDashboard(){
    const { user } = useAuth();

    const loadDashboard = () => {

        if(user.role === "estudiante"){
            
            return <CulturaEstudianteDashboard/>;

        } else if (user.role === "funcionario_bienestar"){

            return <CulturaFuncionarioDashboard/>;
        }
    };

    return (
        <>
            <Nav/>
            {loadDashboard()}
        </>
    );
}

export default CulturaDashboard;