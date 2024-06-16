import { useEffect, useState } from "react";
import { cancelarAsesoriaRequest, getProximasAsesoriasRequest } from "../../api/acompaniamiento";
import ListaAsesorias from "./ListaAsesorias";

function AsesoriasProximasFuncionario(){
    const [citas, setCitas] = useState(null);

    const getCitas = async () => {
        const res = await getProximasAsesoriasRequest();
        setCitas(res.data);
    };

    const handleClick = async (citId) =>{
        await cancelarAsesoriaRequest(citId);
        getCitas();
    };

    useEffect(() => {
        getCitas();
    }, []);

    if(!citas){
        return <p>Loading...</p>
    }

    return(
        <>  
            <ListaAsesorias title={"Próximas citas"}citas={citas} handleClick={handleClick}/>
        </>
    );
}

export default AsesoriasProximasFuncionario;