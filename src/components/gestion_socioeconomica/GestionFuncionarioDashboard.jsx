import { useState } from "react";
import SecondLevelMenu from "../SecondLevelMenu";
import InfoConvocatoriasAbiertas from "./InfoConvocatoriasAbiertas";
import InfoConvocatoriaFuncionario from "./InfoConvocatoriaFuncionario";
import Beneficiarios from "./Beneficiarios";

 
function GestionFuncionarioDashboard(){
    const [page, setPage] = useState("convocatorias");
    const pages = ["convocatorias", "beneficiarios"];
    const pageLabels = ["Convocatorias", "Beneficiarios"];

    const loadPage = () => {
        if(page === pages[0]){
            return <InfoConvocatoriasAbiertas/>;
        } else if(page === pages[1]){
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