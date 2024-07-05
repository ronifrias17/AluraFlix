import { useState, useEffect } from "react";
import {
  DialogEdit,
  FondoTrasparent,
} from "../../StyledComponent/Home/EditarCard";
import ButtonNotClicked from "../../StyledComponent/Home/Header/Header-Component/Button-Not-Clicked";
import ButtonClicked from "../../StyledComponent/Home/Header/Header-Component/Button-clicked";
import Formulario from "../NuevoVideo/Formulario";

function Editar({ cerrar }) {
  const handleCerrar = () => {
    cerrar(); 
  };

  return (
    <>
      <FondoTrasparent />
      <DialogEdit open>
        <div className="close" onClick={handleCerrar}>
          <img src="/public/img/close.png" alt="Icono cerrar" />
        </div>
        <Formulario
          color="#2271d1"
          justify="center"
          justifyButtons="space-between"
          bold="900"
          size="40px"
          margin=".1em"
          transform="uppercase"
          titulo="Editar Card:"
          ancho="545px"
        >
          <ButtonClicked title="Guardar" type="submit" />
          <ButtonNotClicked title="Limpiar" type="reset" />
        </Formulario>
      </DialogEdit>
    </>
  );
}

export default Editar;
