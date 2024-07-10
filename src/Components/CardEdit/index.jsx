import {
  DialogEdit,
  FondoTrasparent,
} from "../../StyledComponent/Home/EditarCard";
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
          <button type="submit" className="Guardar_Edit">
            Guardar
          </button>
          <button type="reset" className="Limpiar">
            Limpiar
          </button>
        </Formulario>
      </DialogEdit>
    </>
  );
}

export default Editar;
