import InfoTallerCultural from "./InfoTallerCultural";

function InfoTallerCulturalFuncionario() {
  const handleClick = async () => {
    alert("Editando")
  };

  return (
    <>
      <div className="rounded-wrapper h-[600px]">
        <InfoTallerCultural />
        <button
          className="green-button mx-0 my-9"
          onClick={() => handleClick()}
        >
          Editar
        </button>
      </div>
    </>
  );
}

export default InfoTallerCulturalFuncionario;
