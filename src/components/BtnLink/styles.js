import styled from 'styled-components'
import { Link } from "react-router-dom";

export const StyledLink = styled(Link)`
  display: flex;
  flex-direction: column;
  background: linear-gradient(85deg, #434343, #262626);
  color: #b5b5b5;
  padding: 1.2rem;
  border-radius: 16px;
  font-weight: 600;
  text-decoration: none;
  &:hover {
      color: #ff7a18;
      cursor: pointer;
    }
`;
