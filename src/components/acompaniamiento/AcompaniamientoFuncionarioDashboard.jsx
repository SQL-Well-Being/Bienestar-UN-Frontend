import { useState } from "react";
import SecondLevelMenu from "../SecondLevelMenu";
import AgendadorAsesoriasFuncionario from "./AgendadorAsesoriasFuncionario";
import AsesoriasProximasFuncionario from "./AsesoriasProximasFuncionario";

function AcompaniamientoFuncionarioDashboard(){
    const [page, setPage] = useState("agendamiento-citas");
    const pages = ["agendamiento-citas",  "consulta-citas"];
    const pageLabels = ["Agendar citas asesoria", "Consultar citas asesoria"];
    
    const renderPage = () => {
        if(page === pages[0]){
            return <AgendadorAsesoriasFuncionario/>;
        } else if(page === pages[1]){
            return <AsesoriasProximasFuncionario/>;
        }
    };

    return(
        <>
            <SecondLevelMenu labels={pageLabels} pages={pages} currentPage={page} setter={setPage}/>
            {renderPage()}

        </>
    );
}

export default AcompaniamientoFuncionarioDashboard;