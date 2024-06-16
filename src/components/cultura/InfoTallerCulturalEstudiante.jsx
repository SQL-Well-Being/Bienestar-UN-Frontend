import { useParams } from "react-router-dom";
import { useAuth } from "../../context/authContext";
import InfoTallerCultural from "./InfoTallerCultural";
import { postAsistenciaTallerCulturalRequest } from "../../api/cultura";

function InfoTallerCulturalEstudiante() {
  const { user } = useAuth();
  const { id } = useParams();

  const handleClick = async () => {
    try {
      await postAsistenciaTallerCulturalRequest(id, { DNI: user.username });
      alert("Asistencia registrada correctamente.");
    } catch (e) {
      alert(e);
    }
  };

  return (
    <>
      <div className="rounded-wrapper h-[600px]">
        <InfoTallerCultural />
        <button
          className="green-button mx-0 my-9"
          onClick={() => handleClick()}
        >
          Registrar participación
        </button>
      </div>
    </>
  );
}

export default InfoTallerCulturalEstudiante;
