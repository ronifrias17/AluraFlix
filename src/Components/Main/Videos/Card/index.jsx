import { CardStylizada } from "../../../../StyledComponent/Main/Videos/Card";
import Editar from "../../../CardEdit";
import { useState } from "react";

export default function Card({ video, color, eliminar }) {
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleClose = () => {
    setIsEditing(false);
  };

  if (!video) {
    return null; // o cualquier UI alternativa que quieras mostrar en caso de que video sea undefined
  }

  return (
    <CardStylizada color={color}>
      <div
        className="imagenContent"
        style={{ backgroundImage: `url(${video.imagen})` }}
      ></div>
      <div className="rodapie">
        <div className="rodabpieItems" onClick={() => eliminar(video.id)}>
          <img src="/public/img/borrar.png" alt="Borrar" />
          <span>Borrar</span>
        </div>
        <div className="rodabpieItems" onClick={handleEditClick}>
          <img src="/public/img/editar.png" alt="Editar" />
          <span>Editar</span>
        </div>
      </div>
      {isEditing && (
        <Editar
          cerrar={handleClose}
          initialValues={{
            id: video.id,
            titulo: video.titulo,
            categoria: video.categoria,
            imagen: video.imagen,
            video: video.video,
            descripcion: video.descripcion,
          }}
        />
      )}
    </CardStylizada>
  );
}
