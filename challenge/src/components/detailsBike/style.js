import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  padding: 35px;
`;
export const SubContainer = styled.div`
  display: flex;
  width: 90%;
  height: 300px;

  margin: auto;
`;
export const Image = styled.div`
  display: flex;
  justify-content: center;
  img {
    width: 380px;
    height: 100%;
    border-radius: 10px 0px 0px 10px;
  }
`;
export const Title = styled.div`
  height: 100%;
  width: 100%;
  background-color: rgb(235, 230, 230);
  padding: 5px 20px 10px;
  border-radius: 0px 10px 10px 0;
  h2 {
    color: #006dae;
    font-size: 22px;
  }
  span {
    font-size: 19px;
  }
`;

export const Cont = styled.div`
  display: flex;
  width: 90%;
  height: 400px;
  margin: auto;
  margin-top: 20px;
`;

export const Description = styled.div`
  height: 100%;
  width: 380px;
  border: 4px solid rgb(235, 230, 230);
  display: flex;
  border-radius: 10px 0px 0px 10px;
  /* background-color: gray; */
  flex-direction: column;
`;
export const TitleDescription = styled.div`
  height: 50px;
  width: 100%;
  background-color: rgb(235, 230, 230);
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Text = styled.div`
  margin: 10px;
`;
export const Map = styled.div`
  width: calc(100% - 380px);
  height: 100%;
  background-color: red;
  border-radius: 0px 10px 10px 0px;
`;
