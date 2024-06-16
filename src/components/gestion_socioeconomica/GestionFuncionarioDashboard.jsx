import { useState } from "react";
import SecondLevelMenu from "../SecondLevelMenu";
import Beneficiarios from "./Beneficiarios";
import InfoConvocatoriasGestion from "./InfoConvocatoriasGestion";

 
function GestionFuncionarioDashboard(){
    const [page, setPage] = useState("convocatorias-activas");
    const pages = ["convocatorias-activas", "convocatorias-inactivas", "beneficiarios"];
    const pageLabels = ["Convocatorias Activas", "Convocatorias Inactivas", "Beneficiarios"];

    const loadPage = () => {
        if(page === pages[0]){
            return <InfoConvocatoriasGestion activas={true}/>;
        } else if(page === pages[1]) {
            return <InfoConvocatoriasGestion activas={false}/>;
        }else if(page === pages[2]){
            return <Beneficiarios/>;
        }
    };

    return (
        <>
            <SecondLevelMenu labels={pageLabels} pages={pages} currentPage={page} setter={setPage}/>
            {loadPage()}
        </>
    );
}

export default GestionFuncionarioDashboard;