import { createSearchParams, useNavigate, useParams } from "react-router-dom";
import { postParticipacionRequest } from "../../api/gestion";
import { useAuth } from "../../context/authContext";
import InfoConvocatoriaGestion from "./InfoConvocatoriaGestion";
import { AxiosError } from "axios";

function InfoConvocatoriaEstudiante(){
    const { user } = useAuth();
    const { conId } = useParams();
    const navigate = useNavigate();

    const hanldeClick = async () => {
        try {
            await postParticipacionRequest(conId, { DNI: user.username});
            navigate({
                pathname: "/gestion-socioeconomica",
                search: createSearchParams({ page: "participaciones"}).toString()
            });

        } catch (error) {
            if(error instanceof AxiosError){
                alert(error.response.data.message);
            } else {
                alert(error);
            }
        }
    };

    return (
        <>
            <div className="rounded-wrapper h-[600px]">
                <InfoConvocatoriaGestion/>
                <button className="green-button mx-0 my-9" onClick={() => hanldeClick()}>Participar</button>
            </div>
        </>
    );
}

export default InfoConvocatoriaEstudiante;