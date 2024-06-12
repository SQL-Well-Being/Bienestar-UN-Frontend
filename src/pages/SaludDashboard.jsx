import { useState } from "react";
import { useAuth } from "../context/authContext";
import SaludProfileInfo from "../components/salud/SaludProfileInfo";
import InfoCitasSalud from "../components/salud/InfoCitasSalud";
import { useParams } from "react-router-dom";
import { CitasSaludProvider } from "../context/citasSaludContext";

import '../styles/salud/Dashboard.css'

function SaludDashboard() {
    const { user } = useAuth();
    const params = useParams();
    const [ page, setPage ] = useState("profile");

    return (
        <>
        <div className="second-menu">
            <span onClick={() => setPage("profile")} className={page === "profile" ? "second-menu-selected": ""}>Perfil de salud</span>
            <span onClick={() => setPage("citas")} className={page === "citas" ? "second-menu-selected": ""}>Citas individuales</span>
        </div>

            {page === "profile" ? <SaludProfileInfo /> : <CitasSaludProvider DNI={params.DNI}><InfoCitasSalud/></CitasSaludProvider>}
        </>
    );
}

export default SaludDashboard;