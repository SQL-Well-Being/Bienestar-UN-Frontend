import Nav from "../components/Nav";
import DeporteEstudianteDashboard from "../components/deporte/DeporteEstudianteDashboard";
import DeporteFuncionarioDashboard from "../components/deporte/DeporteFuncionarioDashboard";
import { useAuth } from "../context/authContext";

function DeporteDashboard() {
  const { user } = useAuth();

  const loadDashboard = () => {
    if (user.role === "estudiante") {
      return <DeporteEstudianteDashboard />;
    } else if (user.role === "funcionario_bienestar") {
      return <DeporteFuncionarioDashboard />;
    }
  };

  return (
    <>
      <Nav />
      {loadDashboard()}
    </>
  );
}

export default DeporteDashboard;
