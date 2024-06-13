import { useEffect, useState } from "react";
import { cancelarCitaRequest, getProximasCitasRequest } from "../../api/salud";
import ListaCitasSalud from "./ListaCitasSalud";

function CitasProximasFuncionario(){
    const [citas, setCitas] = useState(null);

    const getCitas = async () => {
        const res = await getProximasCitasRequest();
        setCitas(res.data);
    };

    const handleClick = async (citId) =>{
        await cancelarCitaRequest(citId);
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
            <ListaCitasSalud citas={citas} handleClick={handleClick}/>
        </>
    );
}

export default CitasProximasFuncionario;