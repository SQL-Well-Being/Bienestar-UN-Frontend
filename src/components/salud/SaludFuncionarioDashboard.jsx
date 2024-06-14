import { useState } from "react";
import ConsultaPerfiles from "./ConsultaPerfiles";
import AgendadorCitasSaludFuncionario from "./AgendadorCitasSaludFuncionario";
import CitasProximasFuncionario from "./CitasProximasFuncionario";
import SecondLevelMenu from "../SecondLevelMenu";

function SaludFuncionarioDashboard(){
    const [page, setPage] = useState("consulta-perfiles");
    const pages = ["consulta-perfiles", "agendamiento-citas",  "consulta-citas"];
    const pageLabels = ["Perfiles de salud", "Agendar citas individuales", "Consultar citas individuales"];
    
    const renderPage = () => {
        if(page === pages[0]){
            return <ConsultaPerfiles/>;
        } else if(page === pages[1]){
            return <AgendadorCitasSaludFuncionario/>;
        } else if (page === pages[2]){
            return <CitasProximasFuncionario/>;
        }
    };

    return(
        <>
            <SecondLevelMenu labels={pageLabels} pages={pages} currentPage={page} setter={setPage}/>
            {renderPage()}

        </>
    );
}

export default SaludFuncionarioDashboard;