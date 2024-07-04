import { Link } from "react-router-dom";
import styled from "styled-components";

const ButtonClick = styled.button`
  width: 180.13px;
  height: 54px;
  font-family: "Source Sans 3";
  font-size: 20px;
  font-weight: 900;
  text-transform: uppercase;
  line-height: 24px;
  text-align: center;
  border-radius: 10px;
  background-color: rgba(0, 0, 0, 0.9);
  border: 2px solid rgba(34, 113, 209, 1);
  box-shadow: 0px 0px 12px 4px rgba(34, 113, 209, 1) inset;
  color: rgba(34, 113, 209, 1);
  cursor: pointer;

  .enlace {
    text-decoration: none;
    color: inherit;
  }
`;

export default function ButtonClicked({ title, link }) {
  return (
    <Link to={link} className="enlace">
      <ButtonClick>{title}</ButtonClick>
    </Link>
  );
}
