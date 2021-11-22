import { Wrapper } from "./styles";
import Puff from "../../assets/images/puff.svg";

export const Loading = () => {
  return (
    <Wrapper>
      <img src={Puff} alt="loading"/>
    </Wrapper>
  );
};
