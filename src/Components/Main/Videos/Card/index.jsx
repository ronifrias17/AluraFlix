import { CardStylizada } from "../../../../StyledComponent/Main/Videos/Card";

export default function Card({ img, color }) {
  return (
    <CardStylizada color={color}>
      <div
        className="imagenContent"
        style={{ backgroundImage: `url(${img})` }}
      ></div>
      <div className="rodapie">
        <div className="rodabpieItems">
          <img src="/public/img/borrar.png" alt="Borrar" />
          <span>Borrar</span>
        </div>
        <div className="rodabpieItems">
          <img src="/public/img/editar.png" alt="Editar" />
          <span>Editar</span>
        </div>
      </div>
    </CardStylizada>
  );
}
