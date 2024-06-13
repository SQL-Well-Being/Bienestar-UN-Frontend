import { useState } from "react";
import ConsultaPerfiles from "./ConsultaPerfiles";
import AgendadorCitasSaludFuncionario from "./AgendadorCitasSaludFuncionario";
import CitasProximasFuncionario from "./CitasProximasFuncionario";

function SaludFuncionarioDashboard(){
    const [page, setPage] = useState("consulta-perfiles");
    
    const renderPage = () => {
        if(page === "consulta-perfiles"){
            return <ConsultaPerfiles/>;
        } else if(page === "agendamiento-citas"){
            return <AgendadorCitasSaludFuncionario/>;
        } else {
            return <CitasProximasFuncionario/>;
        }
    };

    return(
        <>
        <div className="second-menu">
            <span onClick={() => setPage("consulta-perfiles")} >Perfiles de salud</span>
            <span onClick={() => setPage("agendamiento-citas")} >Agendar Citas individuales</span>
            <span onClick={() => setPage("consulta-citas")} >Consultar Citas individuales</span>
        </div>

        {renderPage()}

        </>
    );
}

export default SaludFuncionarioDashboard;