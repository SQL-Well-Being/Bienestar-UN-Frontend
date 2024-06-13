import { useEffect, useState } from "react";
import { useAuth } from "../../context/authContext";
import { getPerfilDeSaludRequest } from "../../api/salud.js";
import { AxiosError } from "axios";


function SaludProfileInfo({ profileTitle, DNI }) {
    const [perfil, setPerfil] = useState(null);
  
    useEffect(() => {
      const getPerfil = async () => {
        try {
            if (DNI) {
              const res = await getPerfilDeSaludRequest(
                DNI
              );
              setPerfil(res.data);
            }
        } catch (error) {
            if(error instanceof AxiosError){
              alert(error.response.data.message);
            } else {
              alert(error);
            }

            setPerfil(null);
        }

      };
      getPerfil();
    }, [profileTitle]);

    if(!perfil){
        return <p>Loading...</p>
    }
    return (
        <>
        <div className="profile">
          <h2>{ profileTitle }</h2>
          <p><b>Estatura:</b>{perfil.perfsalud_estatura}</p>
          <p><b>Peso:</b>{perfil.perfsalud_peso}</p>
          <p><b>RH:</b>{perfil.perfsalud_RH}</p>
          <p><b>Discapacidades: </b></p>
          { <ul>
              {perfil.perfsalud_discapacidades.split("-").map((element, idx) => {
                  return <li key={idx}>{element}</li>
              })}
          </ul> }
        </div>

        </>
    );
}

export default SaludProfileInfo;