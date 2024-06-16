import { createContext, useContext, useEffect, useState } from "react";
import { getProximasAsesoriasEstudianteRequest} from "../api/acompaniamiento";

const CitasAsesoriaContext = createContext();

export const useCitasAsesoria = () => {
    const context = useContext(CitasAsesoriaContext);

    if(!context){
        throw Error("useCitasAsesoria must be wtihin CitasAsesoriaProvider");
    }

    return context;
};

export const CitasAsesoriaProvider = ({ DNI, children }) => {
    const [proximasCitas, setProximasCitas] = useState();
    const getProximasCitas = async () => {
        const res = await getProximasAsesoriasEstudianteRequest(DNI);
        setProximasCitas(res.data);
    };
    
    useEffect(() => {
        getProximasCitas();

    }, []);


    return (
        <CitasAsesoriaContext.Provider
            value={{
                proximasCitas,
                setProximasCitas,
                getProximasCitas
            }}
        >
            {children}
        </CitasAsesoriaContext.Provider>
    );
}