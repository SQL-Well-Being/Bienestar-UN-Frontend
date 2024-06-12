import { useEffect, useState } from "react";
import { useAuth } from "../../context/authContext";
import { getPerfilDeSaludRequest } from "../../api/salud.js";
import { useParams } from "react-router-dom";



function Saludperfil() {
    const params = useParams();
    const [perfil, setPerfil] = useState(null);
  
    useEffect(() => {
      const getPerfil = async () => {
        if (params.DNI) {
          const res = await getPerfilDeSaludRequest(
            params.DNI
          );
          setPerfil(res.data);
        }
      };
      getPerfil();
    }, []);

    if(!perfil){
        return <p>Loading...</p>
    }
    return (
        <>
        <div className="profile">
          <h2>Mi perfil de salud</h2>
          <p><b>Estatura:</b>{perfil.perfsalud_estatura}</p>
          <p><b>Peso:</b>{perfil.perfsalud_peso}</p>
          <p><b>RH:</b>{perfil.perfsalud_RH}</p>
          <p><b>Discapacidades: </b></p>
          { <ul>
              {perfil.perfsalud_discapacidades.split("-").map((element, idx) => {
                  <li id={idx}>{element}</li>
              })}
          </ul> }
        </div>

        </>
    );
}

export default Saludperfil;