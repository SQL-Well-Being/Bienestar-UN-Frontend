import { useEffect, useState } from "react";
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
        <div className="w-[820px]">
          <h2 className=" text-3xl font-bold mb-6">{ profileTitle }</h2>

          <div>
            <p className="my-[10px]"><b>Estatura:</b>{perfil.perfsalud_estatura}</p>
            <p className="my-[10px]"><b>Peso:</b>{perfil.perfsalud_peso}</p>
            <p className="my-[10px]"><b>RH:</b>{perfil.perfsalud_RH}</p>
            <p className="my-[10px]"><b>Discapacidades: </b></p>
          </div>

          { <ul className="list-disc">
              {perfil.perfsalud_discapacidades.map((element, idx) => {
                  return <li key={idx} className="mx-[50px]">{element}</li>
              })}
          </ul> }
        </div>

        </>
    );
}

export default SaludProfileInfo;