import React, { useState, forwardRef } from "react";
import {
  Inputs,
  Labels,
  FormularioStylizado,
  TituloContent,
  Select,
  TextArea,
  BotonesContent,
} from "../../../StyledComponent/New-Video-Module/FormularioStylizado";

const Formulario = forwardRef(
  (
    {
      border,
      color,
      children,
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
      onSubmit,
    },
    ref
  ) => {
    const [formData, setFormData] = useState({
      titulo: "",
      categoria: "",
      imagen: "",
      video: "",
      descripcion: "",
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    };

    const validateForm = () => {
      const errors = {};

      if (!formData.titulo) {
        errors.titulo = "El título es obligatorio";
      } else if (!/^[a-zA-Z0-9\s\-?]+$/.test(formData.titulo)) {
        errors.titulo = "Título inválido";
      }

      if (!formData.categoria) {
        errors.categoria = "La categoría es obligatoria";
      }

      if (!formData.imagen) {
        errors.imagen = "La URL de la imagen es obligatoria";
      } else if (
        !/^https?:\/\/.+\.(jpg|jpeg|png|gif|bmp)$/.test(formData.imagen)
      ) {
        errors.imagen = "URL de imagen inválida";
      }

      if (!formData.video) {
        errors.video = "La URL del video es obligatoria";
      } else if (
        !/^https?:\/\/(www\.)?youtube\.com\/watch\?v=[\w-]+$/.test(
          formData.video
        )
      ) {
        errors.video = "URL de YouTube inválida";
      }

      return errors;
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      const validationErrors = validateForm();
      if (Object.keys(validationErrors).length === 0) {
        onSubmit(formData);
      } else {
        setErrors(validationErrors);
      }
    };

    const handleReset = () => {
      setFormData({
        titulo: "",
        categoria: "",
        imagen: "",
        video: "",
        descripcion: "",
      });
      setErrors({});
    };

    return (
      <FormularioStylizado
        ref={ref}
        justify={justify}
        margin={margin}
        onSubmit={handleSubmit}
        onReset={handleReset}
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
            placeholder={errors.titulo || "Ingrese el título"}
            tamaño={tamaño}
            color={color}
            value={formData.titulo}
            onChange={handleChange}
            style={errors.titulo ? { borderColor: "red", color: "red" } : {}}
          />
        </div>

        <div className="content">
          <Labels htmlFor="categoria">Categoría</Labels>
          <Select
            name="categoria"
            id="categoria"
            placeholder={errors.categoria || "Seleccione una categoría"}
            className="select"
            color={color}
            value={formData.categoria}
            onChange={handleChange}
            style={errors.categoria ? { borderColor: "red", color: "red" } : {}}
          >
            <option value="">Seleccione una categoría</option>
            <option value="frontend">Frontend</option>
            <option value="backend">Backend</option>
            <option value="innovacionygestion">Innovación y gestión</option>
          </Select>
        </div>

        <div className="content">
          <Labels htmlFor="imagen">Imagen</Labels>
          <Inputs
            type="text"
            name="imagen"
            id="imagen"
            placeholder={errors.imagen || "Ingrese el enlace de la imagen"}
            color={color}
            value={formData.imagen}
            onChange={handleChange}
            style={errors.imagen ? { borderColor: "red", color: "red" } : {}}
          />
        </div>

        <div className="content">
          <Labels htmlFor="video">Video</Labels>
          <Inputs
            type="text"
            name="video"
            id="video"
            placeholder={errors.video || "Ingrese el enlace del video"}
            color={color}
            value={formData.video}
            onChange={handleChange}
            style={errors.video ? { borderColor: "red", color: "red" } : {}}
          />
        </div>

        <div className="content textAreaContent">
          <Labels htmlFor="descripcion">Descripción</Labels>
          <TextArea
            name="descripcion"
            id="descripcion"
            placeholder="¿De qué trata el video?"
            color={color}
            anchoText={anchoText}
            value={formData.descripcion}
            onChange={handleChange}
          />
        </div>

        <BotonesContent
          className="botones"
          gap={gap}
          justify={justifyButtons}
          space={space}
          ancho={ancho}
        >
          {children}
        </BotonesContent>
      </FormularioStylizado>
    );
  }
);

export default Formulario;
