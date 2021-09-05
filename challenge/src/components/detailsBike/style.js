import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 800px;
  padding: 35px;
`;
export const SubContainer = styled.div`
  display: flex;
  width: 90%;
  height: 300px;
  /* border: 3px solid gray; */
  margin: auto;
`;
export const Image = styled.div`
  display: flex;
  justify-content: center;
  img {
    width: 300px;
    height: 100%;
    border-radius: 10px;
  }
`;
export const Title = styled.div`
  padding: 5px 50px 10px;
  h2 {
    color: #006dae;
    /* display: inline-flex; */
    font-size: 24px;
  }
  span {
    font-size: 20px;
  }
`;
