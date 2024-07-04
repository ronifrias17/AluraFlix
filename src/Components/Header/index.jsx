import logo from "../../../public/Img/Logo.png";
import { HeaderStylizado } from "../../StyledComponent/Home/Header/Header";
import { Content } from "../../StyledComponent/Home/Header/Header-Component/Content-Buttons";

function Header({ children, color }) {
  return (
    <HeaderStylizado color={color}>
      <div className="imgLogoContent">
        <img src={logo} alt="logo aluraFlix" />
      </div>
      <Content>{children}</Content>
    </HeaderStylizado>
  );
}

export default Header;
