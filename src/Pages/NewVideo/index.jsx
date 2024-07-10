import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import { NuevoVideoStylizado } from "../../StyledComponent/New-Video-Module";
import ButtonClicked from "../../StyledComponent/Home/Header/Header-Component/Button-clicked";
import ButtonNotClicked from "../../StyledComponent/Home/Header/Header-Component/Button-Not-Clicked";
import Titulo from "../../Components/NuevoVideo/Titulo";
import Formulario from "../../Components/NuevoVideo/Formulario";

function NuevoVideo() {
  const handleOnSubmit = async (data) => {
    try {
      const response = await fetch(
        "https://api-proyectos-alura-one.vercel.app/videos-aluraFlix",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
      if (response.ok) {
        console.log("Datos enviados con éxito");
      } else {
        console.log("Error al enviar los datos");
      }
    } catch (error) {
      console.error("Error en la petición:", error);
    }
  };

  return (
    <>
      <Header color="#000000e6">
        <ButtonNotClicked title="Home" link="/" />
        <ButtonClicked title="Nuevo video" />
      </Header>
      <NuevoVideoStylizado>
        <Titulo />
        <Formulario
          border="3px"
          tamaño="470px"
          ancho="100%"
          gap="1em"
          titulo="Crear Tarjeta:"
          onSubmit={handleOnSubmit}
        >
          <button type="submit" className="Guardar">
            Guardar
          </button>
          <button type="reset" className="Limpiar_NVideo">
            Limpiar
          </button>
        </Formulario>
      </NuevoVideoStylizado>
      <Footer />
    </>
  );
}

export default NuevoVideo;
