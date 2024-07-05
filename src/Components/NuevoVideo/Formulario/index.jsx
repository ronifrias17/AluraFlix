import ButtonNotClicked from "../../../StyledComponent/Home/Header/Header-Component/Button-Not-Clicked";
import {
  Inputs,
  Labels,
  FormularioStylizado,
  TituloContent,
  Select,
  TextArea,
  BotonesContent,
} from "../../../StyledComponent/New-Video-Module/FormularioStylizado";

function Formulario({
  border,
  color,
  children,
  justify,
  tamaño,
  anchoText,
  bold,
  size,
  margin,
  gap,
  justifyButtons,
  transform,
  titulo,
  ancho,
  space,
}) {
  return (
    <FormularioStylizado justify={justify} margin={margin}>
      <TituloContent
        border={border}
        color={color}
        bold={bold}
        size={size}
        ancho={ancho}
        margin={margin}
        transform={transform}
      >
        <h2>{titulo}</h2>
      </TituloContent>
      <div className="content">
        <Labels htmlFor="titulo" style={{ textAlign: "left" }}>
          Título
        </Labels>
        <Inputs
          type="text"
          name="titulo"
          id="titulo"
          placeholder="ingrese el título"
          tamaño={tamaño}
          color={color}
        />
      </div>

      <div className="content">
        <Labels htmlFor="categoria">Categoría</Labels>
        <Select
          name="categoria"
          id="categoria"
          placeholder="seleccione una categoria"
          className="select"
          color={color}
        >
          <option>seleccione una categoría</option>
          <option>Frontend</option>
          <option>Backend</option>
          <option>Innovacion y gestion</option>
        </Select>
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
        <TextArea
          name="descripcion"
          id="descripcion"
          placeholder="¿de qué trata el vídeo?"
          color={color}
          anchoText={anchoText}
        ></TextArea>
      </div>

      <BotonesContent
        className="botones"
        gap={gap}
        justify={justifyButtons}
        space={space}
        ancho={ancho}
      >
        {children}
      </BotonesContent>
    </FormularioStylizado>
  );
}

export default Formulario;
