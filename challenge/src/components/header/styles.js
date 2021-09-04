import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0px 0px 15px 15px;
  flex-direction: row;
  background-color: rgb(235, 230, 230);
  box-shadow: rgb(0 0 0 / 17%) 0px 14px 22px -10px,
    rgb(0 0 0 / 35%) 0px 10px 8px -10px;
`;
export const LogoImage = styled.div`
  img {
    width: 115px;
    height: 95px;
    margin: 8px;
  }
`;
export const TitleHeader = styled.div`
  color: #302c3b;
  letter-spacing: 1.5px;
  font-family: "Do Hyeon", sans-serif;
`;
