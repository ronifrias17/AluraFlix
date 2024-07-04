import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import { NuevoVideoStylizado } from "../../StyledComponent/New-Video-Module";
import ButtonClicked from "../../StyledComponent/Home/Header/Header-Component/Button-clicked";
import ButtonNotClicked from "../../StyledComponent/Home/Header/Header-Component/Button-Not-Clicked";
import Titulo from "../../Components/NuevoVideo/Titulo";

function NuevoVideo() {
  return (
    <>
      <Header color="#000000e6">
        <ButtonNotClicked title="Home" link="/" />
        <ButtonClicked title="Nuevo video" />
      </Header>
      <NuevoVideoStylizado>
        <Titulo />
      </NuevoVideoStylizado>
      <Footer />
    </>
  );
}

export default NuevoVideo;
