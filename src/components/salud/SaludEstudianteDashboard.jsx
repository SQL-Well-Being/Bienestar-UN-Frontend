import { useState } from "react";
import { useAuth } from "../../context/authContext";
import SaludProfileInfo from "./SaludProfileInfo";
import InfoCitasSaludEstudiante from "./InfoCitasSaludEstudiante";
import { CitasSaludProvider } from "../../context/citasSaludContext";
import SecondLevelMenu from "../SecondLevelMenu";

// import '../../styles/salud/EstudianteDashboard.css'

function SaludEstudianteDashboard() {
    const { user } = useAuth();
    const [ page, setPage ] = useState("perfil");

    const pages = ["perfil", "citas"];
    const pageLabels = ["Perfil de salud", "Citas Individuales"];

    const renderPage = () => {
        if(page === pages[0]){
            return(
                <div className=" rounded-wrapper ml-10  h-[600px] ">
                    <SaludProfileInfo profileTitle={"Mi perfil de salud"} DNI={user.username}/>
                </div>
            );
        
        } else if(page === pages[1]){
            return(
                <div>
                    <CitasSaludProvider DNI={user.username}>
                        <InfoCitasSaludEstudiante/>
                    </CitasSaludProvider>
                </div>
            );
        }
    };
    
    return (
        <>
            <SecondLevelMenu labels={pageLabels} pages={pages} currentPage={page} setter={setPage}/>
            {renderPage()}
        </>
    );
}

export default SaludEstudianteDashboard;