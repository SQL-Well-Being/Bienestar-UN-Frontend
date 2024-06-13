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
            return <EditSaludProfileInfo profileTitle={profTitle} DNI={estDni} setEditMode={setEditMode}/>;
        } else {
            return (
                <div>
                    <SaludProfileInfo profileTitle={profTitle} DNI={estDni}/>
                    <button onClick={() => setEditMode(true)}>Editar</button>
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
        <div>
            <h2>Consultar  Perfil</h2>
            <form onSubmit={handleSubmit}>
                <label>DNI:</label>
                <input type="text" onChange={(e) => setEstDni(e.target.value)}/>
                <button type="submit" disabled={editMode}>Consultar</button>
            </form>
        </div>

        {showProfile ? renderProfile() : ''}

        </>
    );
}

export default ConsultaPerfiles