import { BtnBack } from "../../components/BtnBack";
import { Wrapper, Text } from "./styles";

interface IProps {
  title?: string
}

export const Header = ({ title }: IProps) => {
  return (
    <Wrapper>
      <BtnBack/>
      <Text>{title}</Text>
    </Wrapper>
  );
};
