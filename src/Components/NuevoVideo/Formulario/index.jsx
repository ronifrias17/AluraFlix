import ButtonNotClicked from "../../../StyledComponent/Home/Header/Header-Component/Button-Not-Clicked";
import {
  Inputs,
  Labels,
  FormularioStylizado,
  TituloContent,
} from "../../../StyledComponent/New-Video-Module/FormularioStylizado";

function Formulario({ border, color }) {
  return (
    <FormularioStylizado>
      <TituloContent border={border} color={color}>
        <h2>Crear Tarjeta</h2>
      </TituloContent>
      <div className="content">
        <Labels htmlFor="titulo">Título</Labels>
        <Inputs
          type="text"
          name="titulo"
          id="titulo"
          placeholder="ingrese el título"
          tamaño="470px"
          color={color}
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
          <option>Frontend</option>
          <option>Backend</option>
          <option>Innovacion y gestion</option>
        </select>
      </div>

      <div className="content">
        <Labels htmlFor="imagen">Imagen</Labels>
        <Inputs
          type="text"
          name="imagen"
          id="imagen"
          placeholder="ingrese el enlace de la imagen"
          color={color}
        />
      </div>

      <div className="content">
        <Labels htmlFor="video">Video</Labels>
        <Inputs
          type="text"
          name="video"
          id="video"
          placeholder="ingrese el enlace del video"
          color={color}
        />
      </div>

      <div className="content textAreaContent">
        <Labels htmlFor="descripcion">Descripcion</Labels>
        <textarea
          name="descripcion"
          id="descripcion"
          placeholder="¿de qué trata el vídeo?"
        ></textarea>
      </div>

      <div className="botones">
        <ButtonNotClicked color="#2271d1" title="Guardar" type="submit" />
        <ButtonNotClicked title="Limpiar" type="reset" />
      </div>
    </FormularioStylizado>
  );
}

export default Formulario;
