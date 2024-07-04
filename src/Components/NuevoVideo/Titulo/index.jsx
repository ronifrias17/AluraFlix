import { TituloNuevoVideoContent } from "../../../StyledComponent/New-Video-Module/Titulo-parrafo";

function Titulo() {
  return (
    <TituloNuevoVideoContent>
      <h1 className="titulo">Nuevo video</h1>
      <p className="parrafo">
        Complete el formulario para crear una nueva tarjeta de video
      </p>
    </TituloNuevoVideoContent>
  );
}

export default Titulo;
