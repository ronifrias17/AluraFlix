import ButtonNotClicked from "../../../StyledComponent/Home/Header/Header-Component/Button-Not-Clicked";
import {
  Inputs,
  Labels,
  FormularioStylizado,
} from "../../../StyledComponent/New-Video-Module/FormularioStylizado";

function Formulario() {
  return (
    <FormularioStylizado>
      <div className="tituloForm">
        <h2>Crear Tarjeta</h2>
      </div>
      <div className="content">
        <Labels htmlFor="titulo">Título</Labels>
        <Inputs
          type="text"
          name="titulo"
          id="titulo"
          placeholder="ingrese el título"
          tamaño="470px"
        />
      </div>

      <div className="content">
        <Labels htmlFor="categoria">Categoría</Labels>
        <select
          name="categoria"
          id="categoria"
          placeholder="seleccione una categoria"
          className="select"
        >
          <option>seleccione una categoría</option>
          <option>FrontEnd</option>
          <option>BackEnd</option>
          <option>Innovacion y Gestion</option>
        </select>
      </div>

      <div className="content">
        <Labels htmlFor="imagen">Imagen</Labels>
        <Inputs
          type="text"
          name="imagen"
          id="imagen"
          placeholder="ingrese el enlace de la imagen"
        />
      </div>

      <div className="content">
        <Labels htmlFor="video">Video</Labels>
        <Inputs
          type="text"
          name="video"
          id="video"
          placeholder="ingrese el enlace del video"
        />
      </div>

      <div className="content textAreaContent">
        <Labels htmlFor="descripcion">Descripcion</Labels>
        <textarea
          name="descripcion"
          id="descripcion"
          placeholder="¿de qué trata el vídeo?"
        ></textarea>
        <div className="botones">
          <ButtonNotClicked color="#2271d1" title="Guardar" />
          <ButtonNotClicked title="Limpiar" />
        </div>
      </div>
    </FormularioStylizado>
  );
}

export default Formulario;
