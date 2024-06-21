import { HeaderStylizado } from "../../StyledComponent/Home-module/Header-Components";
import logo from "./Logo.png";
function Header() {
  return (
    <HeaderStylizado>
      <div className="img-Content">
        <img src={logo} alt="logo aluraFlix" />
      </div>
      <div className="button-Content">
        <button className="button button-home">HOME</button>
        <button className="button button-new-video">NUEVO VIDEO</button>
      </div>
    </HeaderStylizado>
  );
}

export default Header;
