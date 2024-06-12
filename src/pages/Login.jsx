import "../styles/Login.css";
import { useAuth } from "../context/authContext";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Login() {
  const { signin, isAuthenticated } = useAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (username, password) => {
    signin({ username: username, password: password });
  };

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/dashboard");
    }
  }, [isAuthenticated]);

  return (
    <div className="wrapper">
      <div className="login-container">
        <div className="form-container">
          <span>Ingresa tu usuario y contraseña</span>
          <form onSubmit={() => handleSubmit(username, password)}>
            <input type="text" onChange={(e) => setUsername(e.target.value)} />
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">Iniciar Sesión</button>
          </form>
        </div>

        <div className="message-container">
          <div className="message">
            <span>¡Bienvenid@!</span>
            <p>
              Por favor inicia sesión para acceder al portal web de Bienestar
              Universitario
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
