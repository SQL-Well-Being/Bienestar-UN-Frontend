import { useAuth } from "../context/authContext";

export default function Dashboard() {
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
  };

  return (
    <>
      <h2>{user.username}</h2>
      <p>{user.role}</p>
      <button onClick={handleLogout}>Logout</button>
    </>
  );
}
