import {
  DialogEdit,
  FondoTrasparent,
} from "../../StyledComponent/Home/EditarCard";
import Formulario from "../NuevoVideo/Formulario";

function Editar({ cerrar, initialValues }) {
  const handleCerrar = () => {
    cerrar();
  };

  const handleOnSubmit = async (data) => {
    try {
      const response = await fetch(
        `https://api-proyectos-alura-one.vercel.app/videos-aluraFlix/${initialValues.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
      if (response.ok) {
        console.log("Datos actualizados con éxito");
      } else {
        console.log("Error al actualizar los datos");
      }
    } catch (error) {
      console.error("Error en la petición:", error);
    }
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
          initialValues={initialValues}
          onSubmit={handleOnSubmit}
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
