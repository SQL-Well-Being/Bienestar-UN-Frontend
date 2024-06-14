import Nav from "../components/Nav";
import { useAuth } from "../context/authContext";

export default function Dashboard() {
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
  };

  return (
    <>
      <Nav/>
      <h2 className="text-yellow-600 text-2xl">{user.username}</h2>
      <p>{user.role}</p>
      <button onClick={handleLogout}>Logout</button>
    </>
  );
}
