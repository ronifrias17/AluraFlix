import styled from "styled-components";

export const HeaderStylizado = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 125px;
  border: 0px 0px 4px 0px;
  background: rgba(38, 38, 38, 1);
  border-bottom: 4px solid rgba(34, 113, 209, 1);
  box-shadow: 0px 5px 29px 0px rgba(34, 113, 209, 0.7);
  padding: 5px 2%;

  .button-Content {
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 35%;
  }

  .button {
    width: 180.13px;
    height: 54px;
    font-family: "Source Sans 3";
    font-size: 20px;
    font-weight: 900;
    line-height: 24px;
    text-align: center;
    border-radius: 10px;
    cursor: pointer;
  }

  .button-home {
    background-color: rgba(0, 0, 0, 0.9);
    border: 2px solid rgba(34, 113, 209, 1);
    box-shadow: 0px 0px 12px 4px rgba(34, 113, 209, 1) inset;
    color: rgba(34, 113, 209, 1);
  }

  .button-new-video {
    border: 2px solid rgba(245, 245, 245, 1);
    background-color: transparent;
    color: #fff;
  }
`;
