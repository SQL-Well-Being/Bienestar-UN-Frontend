
function ListaCitasSalud({citas, handleClick}){
    
    return (
        <div className="appointments-wrapper">
        <h2>Próximas Citas</h2>
        {citas.length === 0 ? <p>No tienes citas proximamente</p> : citas.map((cita) => {
            return (
            
            <div className="appointment">
                <h3>{cita.cit_tipo}</h3>
                <p><b>Fecha:</b>{new Date(cita.fecha).toISOString().split("T")[0]}</p>
                <p><b>Hora:</b>{cita.hora_inicio}</p>
                <p>{cita.descripcion}</p>

                <button onClick={() => handleClick(cita.cit_eve_id)}>Cancelar Cita</button>
            </div>);

        }) }
        
    </div>
    );
}

export default ListaCitasSalud;