import Nav from "../components/Nav";
import DashboardEstudiante from "../components/home/DashboardEstudiante";
import { useAuth } from "../context/authContext";

export default function Dashboard() {
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
  };

  const loadPage = () => {
    if(user.role === "estudiante"){
      return (
        <div>
          <DashboardEstudiante/>
        </div>
      );
    }
  };

  return (
    <>
      <Nav/>
      {loadPage()}
      <button onClick={handleLogout}>Logout</button>
    </>
  );
}
