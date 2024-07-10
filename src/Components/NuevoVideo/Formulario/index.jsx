import React, { Children } from "react";
import { useForm } from "react-hook-form";

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
  children,
}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
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
    <FormularioStylizado
      onSubmit={handleSubmit(onSubmit)}
      justify={justify}
      margin={margin}
    >
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
          placeholder="Ingrese el título"
          tamaño={tamaño}
          color={color}
          {...register("titulo", {
            required: "Titulo obligatorio",
            minLength: {
              value: 5,
              message: "Titulo debe tener un mínimo de 5 caracteres",
            },
          })}
        />
        {errors.titulo && (
          <span className="error">{errors.titulo.message}</span>
        )}
      </div>

      <div className="content">
        <Labels htmlFor="categoria">Categoría</Labels>
        <Select
          name="categoria"
          id="categoria"
          placeholder="Seleccione una categoría"
          className="select"
          color={color}
          {...register("categoria", {
            required: "Categoria obligatoria",
          })}
        >
          <option value="" disabled selected>
            Seleccione una categoría
          </option>
          <option>frontend</option>
          <option>backend</option>
          <option>innovación y gestion</option>
        </Select>
        {errors.categoria && (
          <span className="error">{errors.categoria.message}</span>
        )}
      </div>

      <div className="content">
        <Labels htmlFor="imagen">Imagen</Labels>
        <Inputs
          type="text"
          name="imagen"
          id="imagen"
          placeholder="Ingrese el enlace de la imagen"
          color={color}
          {...register("imagen", {
            required: "Imagen obligatoria",
            pattern: {
              value: /^(https?|chrome):\/\/[^\s$.?#].[^\s]*$/,
              message: "Ingrese una URL válida",
            },
          })}
        />
        {errors.imagen && (
          <span className="error">{errors.imagen.message}</span>
        )}
      </div>

      <div className="content">
        <Labels htmlFor="video">Video</Labels>
        <Inputs
          type="text"
          name="video"
          id="video"
          placeholder="Ingrese el enlace del video"
          color={color}
          {...register("video", {
            required: "Video obligatorio",
            pattern: {
              value: /^(https?|chrome):\/\/[^\s$.?#].[^\s]*$/,
              message: "Ingrese una URL válida",
            },
          })}
        />
        {errors.video && <span className="error">{errors.video.message}</span>}
      </div>

      <div className="content textAreaContent">
        <Labels htmlFor="descripcion">Descripción</Labels>
        <TextArea
          name="descripcion"
          id="descripcion"
          placeholder="¿De qué trata el vídeo?"
          color={color}
          anchoText={anchoText}
          {...register("descripcion", {
            required: "Descripción obligatoria",
          })}
        ></TextArea>
        {errors.descripcion && (
          <span className="error">{errors.descripcion.message}</span>
        )}
      </div>

      <BotonesContent>{children}</BotonesContent>
    </FormularioStylizado>
  );
}

export default Formulario;
