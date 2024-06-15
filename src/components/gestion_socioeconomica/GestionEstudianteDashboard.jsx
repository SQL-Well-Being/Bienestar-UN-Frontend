import { useEffect, useState } from "react";
import SecondLevelMenu from "../SecondLevelMenu";
import InfoConvocatoriasAbiertas from "./InfoConvocatoriasAbiertas";
import InfoParticipacionesEstudiante from "./InfoParticipacionesEstudiante";
import { useSearchParams } from "react-router-dom";

function GestionEstudianteDashboard(){
    const [searchParams, setSearchParams] = useSearchParams();
    const [ page, setPage ] = useState( "convocatorias");
    const pages = ["convocatorias", "participaciones", "beneficios"];
    const pageLabels = ["Convocatorias", "Participaciones", "Beneficios"];

    useEffect(() => {
        if(searchParams.get("page") && pages.indexOf(searchParams.get("page")) !== -1){
            setPage(searchParams.get("page"));
            setSearchParams("");
        }
    }, []);

    const loadPage = () => {
        if(page === pages[0]){
            return <InfoConvocatoriasAbiertas/>;
        } else if(page === pages[1]){
            return <InfoParticipacionesEstudiante/>;
        }
    };

    return (
        <>
            <SecondLevelMenu labels={pageLabels} pages={pages} currentPage={page} setter={setPage}/>
            {loadPage()}

        </>
    );
}

export default GestionEstudianteDashboard;