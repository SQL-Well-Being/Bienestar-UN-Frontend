import InfoTallerCultural from "./InfoTallerCultural";
import AsistenciaTallerCultural from "./AsistenciaTallerCultural"

function InfoTallerCulturalFuncionario() {
  const handleClick = async () => {
    alert("Editando")
  };

  return (
    <>
      <div className="rounded-wrapper h-[450px]">
        <InfoTallerCultural />
        <button
          className="green-button mx-0 my-9"
          onClick={() => handleClick()}
        >
          Editar
        </button>
      </div>
       <AsistenciaTallerCultural /> 
    </>
  );
}

export default InfoTallerCulturalFuncionario;
