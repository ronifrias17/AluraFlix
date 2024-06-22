import Main from "../../Components/Main";
import { Banner } from "../../StyledComponent/Main/Banner";
import BannerImg from "../../../public/Img/Banner.png";
import Header from "../../Components/Header";

function Home() {
  return (
    <>
      <Header />
      <Main>
        <Banner>
          <img src={BannerImg} alt="Banner" />
        </Banner>
      </Main>
    </>
  );
}

export default Home;
