import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { AuthProvider } from "./context/authContext";
import ProtectedRoute from "./components/ProtectedRoute";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import SaludDashboard from "./pages/SaludDashboard";
import CulturaDashboard from "./pages/CulturaDashboard"
import GestionSocioeconomicaDashboard from "./pages/GestionSocioeconomicaDashboard";
import ConvocatoriaGestion from "./pages/ConvocatoriaGestion";
import TallerCultural from "./pages/TallerCultural";

import './App.css'


function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/dashboard" element={<Dashboard />} />

            <Route path="/salud" element={<SaludDashboard/>} />

            <Route path="/cultura" element={<CulturaDashboard/>} />
            <Route path="/cultura/talleres-culturales/:id" element={<TallerCultural/>} />

            <Route path="/gestion-socioeconomica" element={<GestionSocioeconomicaDashboard/>} />
            <Route path="/gestion-socioeconomica/convocatorias/:conId" element={<ConvocatoriaGestion/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
