import Nav from "../components/Nav";
import AcompaniamientoEstudianteDashboard from "../components/acompaniamiento/AcompaniamientoEstudianteDashboard";
import AcompaniamientoFuncionarioDashboard from "../components/acompaniamiento/AcompaniamientoFuncionarioDashboard";
import { useAuth } from "../context/authContext";

function AcompaniamientoDashboard() {
    const { user } = useAuth();
    const loadPage = () => {
        if(user.role === "estudiante"){
            return <AcompaniamientoEstudianteDashboard/>;
        } else if(user.role === "funcionario_bienestar"){
            return <AcompaniamientoFuncionarioDashboard/>;
        }
    };
    return (
        <>  
            <Nav/>
            {loadPage()}
        </>

    );
}

export default AcompaniamientoDashboard;