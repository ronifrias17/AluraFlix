import { useState, useEffect } from "react";
import Videos from "..";
import { ButtonContainer } from "../../../../StyledComponent/Main/Banner/Button";
import { VideoContent } from "../../../../StyledComponent/Main/Videos/Contenedor";
import Button from "../../Banner/Button";
import Card from "../Card";

function ContentVideos() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetch("https://api-proyectos-alura-one.vercel.app/videos-aluraFlix")
      .then((response) => response.json())
      .then((data) => {
        setVideos(data);
      });
  }, []);

  // Agrupar videos por categoría
  const groupedVideos = videos.reduce((acc, video) => {
    if (!acc[video.categoria]) {
      acc[video.categoria] = [];
    }
    acc[video.categoria].push(video);
    return acc;
  }, {});

  return (
    <>
      {Object.keys(groupedVideos).map((categoria) => (
        <div key={categoria}>
          <ButtonContainer>
            <Button color={groupedVideos[categoria][0].color}>
              {categoria}
            </Button>
          </ButtonContainer>
          <VideoContent>
            {groupedVideos[categoria].map((video) => (
              <Card
                key={video.id}
                img={video.imagen}
                color={video.color}
                titulo={video.titulo}
              />
            ))}
          </VideoContent>
        </div>
      ))}
    </>
  );
}

export default ContentVideos;
