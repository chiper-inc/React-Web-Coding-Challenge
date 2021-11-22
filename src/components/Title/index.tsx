import { StyledTitle } from "./styles";

interface IProps {
  text: string,
  alternative?: boolean
}

export const Title = ({ text, alternative = false }: IProps) => {
  return (
    <StyledTitle textColor={alternative}>
      {text}
    </StyledTitle>
  );
};
