import { useEffect, useState } from "react";
import SecondLevelMenu from "../SecondLevelMenu";
import { useSearchParams } from "react-router-dom";
import InfoGAI from "./InfoGAI";
import InfoConvocatoriasGAI from "./InfoConvocatoriasGAI";
import InfoTalleresCulturales from "./InfoTalleresCulturales";

function CulturaFuncionarioDashboard(){
    const [searchParams, setSearchParams] = useSearchParams();
    const [ page, setPage ] = useState("grupos artísticos institucionales");
    const pages = ["grupos artísticos institucionales", "convocatorias gai", "talleres culturales"];
    const pageLabels = ["Grupos artísticos institucionales", "Convocatorias GAI", "Talleres culturales"];

    useEffect(() => {
        if(searchParams.get("page") && pages.indexOf(searchParams.get("page")) !== -1){
            setPage(searchParams.get("page"));
            setSearchParams("");
        }
    }, []);

    const loadPage = () => {
        if(page === pages[0]){
            return <InfoGAI/>;
        } else if(page === pages[1]){
            return <InfoConvocatoriasGAI/>;
        } else if(page === pages[2]){
            return <InfoTalleresCulturales/>
        }
    };

    return (
        <>
            <SecondLevelMenu labels={pageLabels} pages={pages} currentPage={page} setter={setPage}/>
            {loadPage()}

        </>
    );
}

export default CulturaFuncionarioDashboard;