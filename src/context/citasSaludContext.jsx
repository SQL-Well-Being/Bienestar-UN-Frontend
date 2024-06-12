import { createContext, useContext, useEffect, useState } from "react";
import { getProximasCitasRequest } from "../api/salud";

const CitasSaludContext = createContext();

export const useCitasSalud = () => {
    const context = useContext(CitasSaludContext);

    if(!context){
        throw Error("useCitasSalud must be wtihin CitasSaludProvider");
    }

    return context;
};

export const CitasSaludProvider = ({ DNI, children }) => {
    const [proximasCitas, setProximasCitas] = useState();
    const getProximasCitas = async () => {
        const res = await getProximasCitasRequest(DNI);
        setProximasCitas(res.data);
    };
    
    useEffect(() => {
        getProximasCitas();

    }, []);


    return (
        <CitasSaludContext.Provider
            value={{
                proximasCitas,
                setProximasCitas,
                getProximasCitas
            }}
        >
            {children}
        </CitasSaludContext.Provider>
    );
}