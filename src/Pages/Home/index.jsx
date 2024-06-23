import Header from "../../Components/Header";
import Main from "../../Components/Main";
import Banner from "../../Components/Main/Banner";
import Player from "../../Components/Main/Banner/Player";

function Home() {
  return (
    <>
      <Header />
      <Main>
        <Banner img="Banner.png" color="#0012338f" />
      </Main>
    </>
  );
}

export default Home;
