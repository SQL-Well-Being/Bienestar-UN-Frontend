import { Link } from "react-router-dom";

function Nav() {

    return (
        <div className="bg-[#14BD7F] h-[65px] w-[100vw] text-white flex items-center flex-wrap sticky top-0">
            <span className="text-2xl font-bold ml-8"><Link to={"/dashboard"}>Bienestar UN |</Link></span>

                <div className="flex items-center ml-8">
                    <span className="block mx-5"><Link to={"/gestion-socioeconomica"}>Fomento Socioeconomico</Link></span>
                    <span className="block mx-5"><Link to={"/salud"}>Acompañámiento Integral</Link></span>
                    <span className="block mx-5"><Link to={"/salud"}>Salud</Link></span>
                    <span className="block mx-5"><Link to={"/salud"}>Cultura</Link></span>
                    <span className="block mx-5"><Link to={"/salud"}>Actividad fisica y Deporte</Link></span>
                </div>
        </div>
    );
}

export default Nav;