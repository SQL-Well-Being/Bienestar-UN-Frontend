import { useState } from "react";
import InfoConvocatoriaGestion from "./InfoConvocatoriaGestion";
import SecondLevelMenu from "../SecondLevelMenu";
import BeneficiariosConvocatoria from "./BeneficiariosConvocatoria";
import ParticipacionesFuncionario from "./ParticipacionesFuncionario";

function InfoConvocatoriaFuncionario(){
    const [page, setPage] = useState("convocatoria");
    const pages = ["convocatoria", "participaciones", "beneficiarios"];
    const pageLabels = ["Convocatoria", "Participaciones", "Beneficiarios"]

    const loadPage = () => {
        if(page === pages[0]){
            return(
                <div className="rounded-wrapper h-[600px]">
                    <InfoConvocatoriaGestion/>
                </div>
            );
        } else if(page === pages[1]){
            return <ParticipacionesFuncionario/>;
        } else if(page === pages[2]){
            return <BeneficiariosConvocatoria/>;
        }
    };

    return (
        <>
            <SecondLevelMenu labels={pageLabels} pages={pages} currentPage={page} setter={setPage}/>
            {loadPage()}
        </>
    );
}

export default InfoConvocatoriaFuncionario;