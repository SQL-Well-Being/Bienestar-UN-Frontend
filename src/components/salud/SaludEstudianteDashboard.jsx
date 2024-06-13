import { useState } from "react";
import { useAuth } from "../../context/authContext";
import SaludProfileInfo from "./SaludProfileInfo";
import InfoCitasSaludEstudiante from "./InfoCitasSaludEstudiante";
import { CitasSaludProvider } from "../../context/citasSaludContext";

import '../../styles/salud/EstudianteDashboard.css'

function SaludEstudianteDashboard() {
    const { user } = useAuth();
    const [ page, setPage ] = useState("profile");

    return (
        <>
        <div className="second-menu">
            <span onClick={() => setPage("profile")} className={page === "profile" ? "second-menu-selected": ""}>Perfil de salud</span>
            <span onClick={() => setPage("citas")} className={page === "citas" ? "second-menu-selected": ""}>Citas individuales</span>
        </div>

            {page === "profile" ? <SaludProfileInfo profileTitle={"Mi perfil de salud"} DNI={user.username}/> : <CitasSaludProvider DNI={user.username}><InfoCitasSaludEstudiante/></CitasSaludProvider>}
        </>
    );
}

export default SaludEstudianteDashboard;