import Header from "../../Components/Header";
import Main from "../../Components/Main";
import Banner from "../../Components/Main/Banner";
import Videos from "../../Components/Main/Videos";
import ContentVideos from "../../Components/Main/Videos/Contenedor";

function Home() {
  return (
    <>
      <Header />
      <Main>
        <Banner img="Banner.png" color="#0012338f" />

        <Videos>
          <ContentVideos />
        </Videos>
      </Main>
    </>
  );
}

export default Home;
