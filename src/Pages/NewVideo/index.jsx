import React, { useRef } from "react";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import { NuevoVideoStylizado } from "../../StyledComponent/New-Video-Module";
import ButtonClicked from "../../StyledComponent/Home/Header/Header-Component/Button-clicked";
import ButtonNotClicked from "../../StyledComponent/Home/Header/Header-Component/Button-Not-Clicked";
import Titulo from "../../Components/NuevoVideo/Titulo";
import Formulario from "../../Components/NuevoVideo/Formulario";

function NuevoVideo() {
  const formRef = useRef(null);

  const handleSubmit = async (formData) => {
    try {
      const response = await fetch(
        "https://api-proyectos-alura-one.vercel.app/videos-aluraFlix",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) {
        throw new Error("Error al enviar los datos");
      }

      const data = await response.json();
      console.log("Datos enviados con éxito:", data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleGuardar = () => {
    if (formRef.current) {
      formRef.current.requestSubmit();
    }
  };

  const handleLimpiar = () => {
    if (formRef.current) {
      formRef.current.reset();
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
          ref={formRef}
          border="3px"
          tamaño="470px"
          ancho="100%"
          gap="1em"
          titulo="Crear Tarjeta:"
          onSubmit={handleSubmit}
        >
          <ButtonNotClicked
            color="#2271d1"
            title="Guardar"
            onClick={handleGuardar}
          />
          <ButtonNotClicked title="Limpiar" onClick={handleLimpiar} />
        </Formulario>
      </NuevoVideoStylizado>
      <Footer />
    </>
  );
}

export default NuevoVideo;
