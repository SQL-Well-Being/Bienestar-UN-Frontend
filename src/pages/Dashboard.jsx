import Nav from "../components/Nav";
import DashboardEstudiante from "../components/home/DashboardEstudiante";
import DashboardFuncionario from "../components/home/DashboardFuncionario";
import { useAuth } from "../context/authContext";

export default function Dashboard() {
  const { user } = useAuth();

  const loadPage = () => {
    if(user.role === "estudiante"){
      return (
        <div>
          <DashboardEstudiante/>
        </div>
      );
    } else if(user.role === "funcionario_bienestar"){
      return <DashboardFuncionario/>
    }
  };

  return (
    <>
      <Nav/>
      {loadPage()}
    </>
  );
}
