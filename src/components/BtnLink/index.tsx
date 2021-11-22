import { StyledLink } from "./styles";

interface IProps {
  to: string,
  text: string
}

export const BtnLink = ({ to, text }: IProps) => {
  return (
    <StyledLink to={to}>
      {text}
    </StyledLink>
  );
};
