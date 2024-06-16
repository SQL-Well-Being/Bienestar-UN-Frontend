import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAuth } from "../context/authContext";
import { getInfoEstudianteRequest } from "../api/sistemaInformacion";
import Nav from "../components/Nav";


function PerfilEstudiante(){
    const { user } = useAuth();
    const { DNI }  = useParams();
    const navigate = useNavigate();
    const [estudiante, setEstudiante] = useState(null);

    useEffect(() => {
        const getEstudiante = async () =>{
            const res = await getInfoEstudianteRequest(DNI);
            setEstudiante(res.data)
        };

        getEstudiante();
    }, []);

    if(user.role === "estudiante"){
        navigate("/dashboard");
    }

    if(!estudiante){
        return <p>Loading...</p>;
    }

    return (
        <>
            <Nav/>
            <div className="rounded-wrapper w-[950px] ">
                <h2 className="text-3xl  font-bold">Perfil Estudiante</h2>
                <div className="my-5">
                    <h3 className="text-2xl">{estudiante.est_nombre}</h3>
                    <span className="text-sm italic  text-[#666666] ">{estudiante.pro_nombre}</span>
                    
                    <div className="my-5 text-base">
                        <p className="mt-2"><b>ACTIVO: </b>{estudiante.hist_es_activa === 0 ? "NO" : "SI"}</p>
                        <p className="mt-2"><b>PBM: </b>{estudiante.est_pbm}</p>
                        <p className="mt-2"><b>PEAMA: </b>{estudiante.est_es_peama === 0 ? "NO" : "SI"}</p>
                        <p className="mt-2"><b>PAES: </b>{estudiante.est_es_paes === 0 ? "NO" : "SI"}</p>
                        
                    </div>
                </div>
            </div>
        </>
    );
}

export default PerfilEstudiante;