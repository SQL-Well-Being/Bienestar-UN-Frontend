
function ListaAsesorias({title, citas, handleClick}){
    
    return (
        <div className="rounded-wrapper ">
            <h2 className="text-2xl font-bold my-4">{title}</h2>
            {citas.length === 0 ? <p>No tienes citas proximamente</p> : citas.map((cita) => {
                return (
                
                <div className=" bg-[#E6E6E6] rounded-2xl mb-5 p-[10px] ml-5 flex items-center w-[865px]">
                    <div className="w-[575px]">
                        <h3 className="font-bold">Asesoria en:  {cita.cit_ase_tipo}</h3>
                        <p><b>Fecha:</b>{new Date(cita.fecha).toISOString().split("T")[0]}</p>
                        <p><b>Hora:</b>{cita.hora_inicio}</p>
                        <p className="mt-4">{cita.descripcion}</p>
                    </div>

                    <button className="red-button" onClick={() => handleClick(cita.cit_ase_eve_id)}>Cancelar Cita</button>
                </div>);

        }) }
        
    </div>
    );
}

export default ListaAsesorias;