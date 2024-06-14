import { useState } from "react";
import SaludProfileInfo from "./SaludProfileInfo";
import EditSaludProfileInfo from "./EditSaludProfileInfo";

function ConsultaPerfiles(){
    const [editMode, setEditMode] = useState(false);
    const [estDni, setEstDni] = useState(null);
    const [profTitle, setProfTitle] = useState("");
    const [showProfile, setShowProfile] = useState(false);
    
    const renderProfile = () => {

        if(editMode){
            return (
                <div>
                    <EditSaludProfileInfo profileTitle={profTitle} DNI={estDni} setEditMode={setEditMode}/>
                </div>
            );
        } else {
            return (
                <div className="rounded-wrapper ml-10  h-[600px]">
                    <div className="float-left">
                        <SaludProfileInfo profileTitle={profTitle} DNI={estDni}/>
                    </div>
      
                    <button className="green-button float-right " onClick={() => setEditMode(true)}>Editar</button>
                    
                </div>
            );
        }

    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setShowProfile(true);
        setProfTitle(`Perfil de salud - DNI:${estDni}`);
    };

    return(
        <>
        <div className="rounded-wrapper">
            <h2 className="text-2xl font-bold m-4">Consultar  Perfil</h2>
            <form onSubmit={handleSubmit}>
                <div className="flex items-center">
                    <div>
                        <label className="form-label">DNI:</label>
                        <input className="form-input" type="text" onChange={(e) => setEstDni(e.target.value)}/>
                    </div>

                    <button className="green-button" type="submit" disabled={editMode}>Consultar</button>
                </div>

            </form>
        </div>

        {showProfile ? renderProfile() : ''}

        </>
    );
}

export default ConsultaPerfiles