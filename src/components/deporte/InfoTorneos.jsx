import { useEffect, useState } from "react";
import { getTorneosRequest } from "../../api/deporte";
import { Link } from "react-router-dom";

const InfoTorneos = () => {
  const [torneos, setTorneos] = useState(null);

  useEffect(() => {
    const getTorneos = async () => {
      const res = await getTorneosRequest();
      setTorneos(res.data[0]);
    };

    getTorneos();
  }, []);

  if (!torneos) {
    return <p>Loading...</p>;
  }

  return (
    <div className="rounded-wrapper">
      <h2 className="text-3xl font-bold">Torneos</h2>
      <div className="flex flex-row flex-wrap content-start gap-x-[30px] gap-y-9 my-5 w-[1200px]">
        {torneos.map((t) => {
          return (
            <div
              key={t.tall_nombre}
              className="bg-[#E6E6E6] h-[95px] w-[570px] rounded-[20px] p-2 ml-2"
            >
              <span className=" text-xl font-bold hover:cursor-pointer hover:underline">
                <Link to={`/cultura/talleres-culturales/${t.tall_eve_id}`}>
                  {t.tor_nombre}
                </Link>
              </span>
              <p className="text-lg">
                <b>Deporte: </b>
                {t.depo_nombre}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default InfoTorneos;
