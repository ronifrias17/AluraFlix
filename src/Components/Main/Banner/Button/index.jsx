import ButtonStylizado from "../../../../StyledComponent/Main/Banner/Button";

export default function Button({
  color,
  size,
  fontSize,
  ancho,
  alto,
  children,
}) {
  return (
    <ButtonStylizado
      color={color}
      size={size}
      fontSize={fontSize}
      ancho={ancho}
      alto={alto}
    >
      {children}
    </ButtonStylizado>
  );
}
