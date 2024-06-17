import { useEffect, useState } from "react";
import SecondLevelMenu from "../SecondLevelMenu";
import { useSearchParams } from "react-router-dom";
import InfoTorneos from "./InfoTorneos";
import InfoSeleccionesDeportivas from "./InfoSeleccionesDeportivas";
import InfoConvocatoriasSelecciones from "./InfoConvocatoriasSelecciones";

function DeporteFuncionarioDashboard() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [page, setPage] = useState("torneos");
  const pages = [
    "torneos",
    "selecciones deportivas",
    "convocatorias selecciones deportivas",
  ];
  const pageLabels = [
    "Torneos",
    "Selecciones deportivas",
    "Convocatorias selecciones deportivas",
  ];

  useEffect(() => {
    if (
      searchParams.get("page") &&
      pages.indexOf(searchParams.get("page")) !== -1
    ) {
      setPage(searchParams.get("page"));
      setSearchParams("");
    }
  }, []);

  const loadPage = () => {
    if (page === pages[0]) {
      return <InfoTorneos />;
    } else if (page === pages[1]) {
      return <InfoSeleccionesDeportivas />;
    } else if (page === pages[2]) {
      return <InfoConvocatoriasSelecciones />;
    }
  };

  return (
    <>
      <SecondLevelMenu
        labels={pageLabels}
        pages={pages}
        currentPage={page}
        setter={setPage}
      />
      {loadPage()}
    </>
  );
}

export default DeporteFuncionarioDashboard;
