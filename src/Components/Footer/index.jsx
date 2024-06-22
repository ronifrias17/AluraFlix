import logo from "../../../public/Img/Logo.png";
import { Footerstylizado } from "../../StyledComponent/Footer/Footer.styles";

export default function Footer() {
  return (
    <Footerstylizado>
      <img src={logo} alt="Logo de ALura" />
    </Footerstylizado>
  );
}
