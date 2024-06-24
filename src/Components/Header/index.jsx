import logo from "../../../public/Img/Logo.png";
import { HeaderStylizado } from "../../StyledComponent/Home/Header/Header";
import ButtonNotClicked from "../../StyledComponent/Home/Header/Header-Component/Button-Not-Clicked";
import ButtonClicked from "../../StyledComponent/Home/Header/Header-Component/Button-clicked";
import { Content } from "../../StyledComponent/Home/Header/Header-Component/Content-Buttons";

function Header() {
  return (
    <HeaderStylizado>
      <div className="imgLogoContent">
        <img src={logo} alt="logo aluraFlix" />
      </div>
      <Content>
        <ButtonClicked title="Home" />
        <ButtonNotClicked title="Nuevo video" />
      </Content>
    </HeaderStylizado>
  );
}

export default Header;
