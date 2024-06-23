import { Content } from "../../../StyledComponent/Home/Header/Header-Component/Content-Buttons";
import {
  BannerStilizado,
  Gradient,
} from "../../../StyledComponent/Main/Banner";
import Container from "./Container";
import Player from "./Player";

function Banner({ img, color }) {
  return (
    <BannerStilizado style={{ backgroundImage: `url("/public/img/${img}")` }}>
      <Gradient style={{ background: `${color}` }} />
      <Content>
        <Container>
          <h1>Challenge React</h1>
        </Container>
        <Player img="player.png" />
      </Content>
    </BannerStilizado>
  );
}

export default Banner;
