import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import Main from "../../Components/Main";
import Banner from "../../Components/Main/Banner";
import Videos from "../../Components/Main/Videos";
import ContentVideos from "../../Components/Main/Videos/Contenedor";
import ButtonClicked from "../../StyledComponent/Home/Header/Header-Component/Button-clicked";
import ButtonNotClicked from "../../StyledComponent/Home/Header/Header-Component/Button-Not-Clicked";

function Home() {
  return (
    <>
      <Header>
        <ButtonClicked title="Home" link="/" />
        <ButtonNotClicked title="Nuevo video" link="nuevo-video" />
      </Header>
      <Main>
        <Banner img="Banner.png" color="#0012338f" />
        <Videos>
          <ContentVideos />
        </Videos>
      </Main>
      <Footer />
    </>
  );
}

export default Home;
