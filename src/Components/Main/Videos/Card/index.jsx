import { CardStylizada } from "../../../../StyledComponent/Main/Videos/Card";
import Editar from "../../../CardEdit";
import { useState } from "react";

export default function Card({ img, color }) {
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing(true);
  };

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
        <div className="rodabpieItems" onClick={handleEditClick}>
          <img src="/public/img/editar.png" alt="Editar" />
          <span>Editar</span>
        </div>
      </div>
      {isEditing && <Editar />}
    </CardStylizada>
  );
}
