import { useEffect, useState } from "react";
import { getPerfilDeSaludRequest, putPerfilDeSaludRequest } from "../../api/salud.js";
import { AxiosError } from "axios";

function EditSaludProfileInfo({profileTitle, DNI, setEditMode}){
    const [perfil, setPerfil] = useState(null);
    const [estatura, setEstatura] = useState();
    const [peso, setPeso] = useState();
    const [RH, setRH] =useState();
    const [discapacidades, setDiscapacidades] = useState();
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        await putPerfilDeSaludRequest(perfil.perfsalud_id, 
            {
                perfsalud_peso: peso,
                perfsalud_RH: RH,
                perfsalud_estatura: estatura,
                perfsalud_id_discapacidades: discapacidades
            }
        );

        setEditMode(false);
    };

    const handleCheck = (e) => {

        const newDiscapacidades = [...discapacidades];

        if(e.target.checked){
            newDiscapacidades.push(parseInt(e.target.id));
            setDiscapacidades(newDiscapacidades);
        } else {
            setDiscapacidades(newDiscapacidades.filter((i) => i !== parseInt(e.target.id) ));
        }

    };

    useEffect(() => {
      const getPerfil = async () => {
        try {
            if (DNI) {
              const res = await getPerfilDeSaludRequest(
                DNI
              );
              setPerfil(res.data);
              setEstatura(res.data.perfsalud_estatura);
              setPeso(res.data.perfsalud_peso);
              setRH(res.data.perfsalud_RH);
              setDiscapacidades(res.data.perfsalud_id_discapacidades);

            }
        } catch (error) {
            if(error instanceof AxiosError){
              alert(error.response.data.message);
            } else {
              alert(error);
            }

            setPerfil(null);
        }

      };
      getPerfil();
    }, []);


    if(!perfil){
        return <p>Loading...</p>
    }

    return (
        <>
            <div className="rounded-wrapper h-[600px]">

                                        
                <h2 className="text-2xl font-bold m-4 ">Editando {profileTitle}</h2>    

                <form onSubmit={handleSubmit} noValidate={true}>
                
                            <label className="form-label "><b>Estatura</b></label>
                            <input className="form-input mb-4" type="number" defaultValue={perfil.perfsalud_estatura} onChange={(e) => setEstatura(e.target.value)}/>

                            <label className="form-label"><b>Peso</b></label>
                            <input className="form-input mb-4" type="number" defaultValue={perfil.perfsalud_peso} onChange={(e) => setPeso(e.target.value)}/>

                            <label className="form-label"><b>RH</b></label>
                            <input className="form-input mb-4" type="text" defaultValue={perfil.perfsalud_RH} onChange={(e) => setRH(e.target.value)}/>
                            
                            <label className="form-label font-bold"><input className="mr-3"type="checkbox" id={1} onChange={handleCheck} defaultChecked={discapacidades.indexOf(1) !== -1}/>Discapacidad visual</label>
                            <label className="form-label font-bold"><input className="mr-3"type="checkbox" id={2} onChange={handleCheck} defaultChecked={discapacidades.indexOf(2) !== -1}/>Discapacidad auditiva</label>
                            <label className="form-label font-bold"><input className="mr-3"type="checkbox" id={3} onChange={handleCheck} defaultChecked={discapacidades.indexOf(3) !== -1}/>Discapacidad fisica</label>
                            <label className="form-label font-bold"><input className="mr-3"type="checkbox"id={4} onChange={handleCheck} defaultChecked={discapacidades.indexOf(4) !== -1}/>Discapacidad intelectual</label>
                            <label className="form-label font-bold"><input className="mr-3"type="checkbox"id={5} onChange={handleCheck} defaultChecked={discapacidades.indexOf(5) !== -1}/>Trastorno del espectro autista</label>
                            <label className="form-label font-bold"><input className="mr-3"type="checkbox"id={6} onChange={handleCheck} defaultChecked={discapacidades.indexOf(6) !== -1}/>Discapacidad del habla</label>
                            <label className="form-label font-bold"><input className="mr-3"type="checkbox"id={7} onChange={handleCheck} defaultChecked={discapacidades.indexOf(7) !== -1}/>Discapacidad emocional</label>
                            
        
                            <button className="green-button mt-5" type="submit">Guardar</button>
                </form>
                
                    <button className="red-button " onClick={() => setEditMode(false)} >Salir</button>
        
            </div>

        </>

    );
}

export default EditSaludProfileInfo;