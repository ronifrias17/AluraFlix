import Header from "../../Components/Header";
import Main from "../../Components/Main";
import Banner from "../../Components/Main/Banner";
import Player from "../../Components/Main/Banner/Player";
import Videos from "../../Components/Main/Videos";

function Home() {
  return (
    <>
      <Header />
      <Main>
        <Banner img="Banner.png" color="#0012338f" />
        <Videos>
          <p>Hola mundo</p>
          <p>Hola mundo</p>
          <p>Hola mundo</p>
          <p>Hola mundo</p>
          <p>Hola mundo</p>
          <p>Hola mundo</p>
          <p>Hola mundo</p>
          <p>Hola mundo</p>
        </Videos>
      </Main>
    </>
  );
}

export default Home;
