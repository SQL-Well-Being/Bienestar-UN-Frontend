import { useEffect, useState } from "react";
import { getGAIRequest } from "../../api/cultura";
import { Link } from "react-router-dom";

const InfoGAI = () => {
  const [GAI, setGAI] = useState(null);

  useEffect(() => {
    const getGAI = async () => {
      const res = await getGAIRequest();
      setGAI(res.data);
    };

    getGAI();
  }, []);

  if (!GAI) {
    return <p>Loading...</p>;
  }

  return (
    <div className="rounded-wrapper">
      <h2 className="text-3xl font-bold">Grupos artísticos institucionales</h2>
      <div className="flex flex-row flex-wrap content-start gap-x-[30px] gap-y-9 my-5 w-[1200px]">
        {GAI.map((g) => {
          return (
            <div
              className="bg-[#E6E6E6] h-[95px] w-[570px] rounded-[20px] p-2 ml-2"
            >
              <p className=" text-xl font-bold">
                {g.gru_nombre}
              </p>
              <p className="text-lg">
                <b>Director: </b>
                {g.per_primer_nombre} {g.per_primer_apellido}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default InfoGAI;
