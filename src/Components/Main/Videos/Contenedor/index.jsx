import { useState, useEffect } from "react";
import { ButtonContainer } from "../../../../StyledComponent/Main/Banner/Button";
import { VideoContent } from "../../../../StyledComponent/Main/Videos/Contenedor";
import Button from "../../Banner/Button";
import Card from "../Card";

function ContentVideos({ onDataFetched }) {
  const [videos, setVideos] = useState([]);

  const colorMap = {
    frontend: "#6bd1ff",
    backend: "#00c86f",
    "innovacion y gestion": "#ffba05",
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://api-proyectos-alura-one.vercel.app/videos-aluraFlix"
        );
        const data = await response.json();
        setVideos(data);
        if (onDataFetched) {
          onDataFetched(data);
        }
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, [onDataFetched]);

  // Agrupar videos por categoría
  const groupedVideos = videos.reduce((acc, video) => {
    if (!acc[video.categoria]) {
      acc[video.categoria] = [];
    }
    acc[video.categoria].push(video);
    return acc;
  }, {});

  const eliminar = (id) => {
    setVideos(videos.filter((video) => video.id !== id));
  };

  return (
    <>
      {Object.keys(groupedVideos).map((categoria) => (
        <div key={categoria}>
          <ButtonContainer>
            <Button color={colorMap[categoria]}>{categoria}</Button>
          </ButtonContainer>
          <VideoContent>
            {groupedVideos[categoria].map((video) => (
              <Card
                key={video.id}
                video={video}
                color={colorMap[categoria]}
                eliminar={eliminar}
              />
            ))}
          </VideoContent>
        </div>
      ))}
    </>
  );
}

export default ContentVideos;
