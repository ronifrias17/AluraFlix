import { HeaderStylizado } from "../../StyledComponent/Home-module/Header-styles/Header";
import ButtonNotClicked from "../../StyledComponent/Home-module/Header-styles/Header-Component/Button-Not-Clicked";
import ButtonClicked from "../../StyledComponent/Home-module/Header-styles/Header-Component/Button-clicked";
import { Content } from "../../StyledComponent/Home-module/Header-styles/Header-Component/Content-Buttons";
import logo from "./Logo.png";

function Header() {
  return (
    <HeaderStylizado>
      <div className="img-Content">
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
