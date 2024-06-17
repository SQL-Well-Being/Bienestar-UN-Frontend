import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../context/authContext";
import { useEffect, useState } from "react";

function Nav() {
    const { logout } = useAuth();
    const [page, setPage] = useState();
    const  route  = useLocation();
    
    useEffect(()=>{
        setPage(route.pathname.split("/")[1]);
    },
    []);

    const handleLogout = () => {
        logout();
      };

    return (
        <div className="bg-[#14BD7F] h-[65px] w-[100vw] text-white flex items-center flex-wrap sticky top-0">
            <div className="float-left w-[92vw]">

                    <div className="flex items-center">
                        <span className="text-2xl font-bold ml-8 mr-5 block"><Link to={"/dashboard"}>Bienestar UN |</Link></span>
                        
                        <span className={`block mx-5 ${page === "gestion-socioeconomica"? " underline " : ""}`}>
                            <Link to={"/gestion-socioeconomica"}>Fomento Socioeconomico</Link>
                        </span>
                        
                        <span className={`block mx-5 ${page === "acompaniamiento"? " underline " : ""}`}>
                            <Link to={"/acompaniamiento"}>Acompañamiento Integral</Link>
                        </span>

                        <span className={`block mx-5 ${page === "salud"? " underline " : ""}`}>
                            <Link to={"/salud"}>Salud</Link>
                        </span>

                        <span className={`block mx-5 ${page === "cultura"? " underline " : ""}`}>
                            <Link to={"/cultura"}>Cultura</Link>
                        </span>

                        <span className={`block mx-5 ${page === "deporte"? " underline " : ""}`}>
                            <Link to={"/deporte"}>Actividad fisica y Deporte</Link>
                        </span>
                    </div>
            </div>

            
            <span className="block float-right hover:cursor-pointer" onClick={handleLogout}>Cerrar Sesión</span>
        </div>
    );
}

export default Nav;