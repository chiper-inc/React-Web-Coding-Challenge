import styled from 'styled-components';

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  & p {
    align-self: flex-end;
  }
`;

export const P = styled.p`
  font-size: 18px;
  margin-bottom: 15px;
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-top: 20px;
`;

export const Button = styled.button`
  margin: 0 10px;
  padding: 5px;
  border: none;
  color: #1b262c;
  background-color: transparent;
  outline: none;
  cursor: pointer;
  &:hover {
    border-bottom: 1px solid black;;
  }
`;

export const Pages = styled.ul`
  display: flex;
  & li {
    margin: 0 10px;
    cursor: pointer;
  }
`;

export const FilterTitle = styled.input`
  width: 30%;
  height: 30px;
  margin-bottom: 15px;
  padding-left: 15px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  outline: none;
  &:hover {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  }
`;

export const Li = styled.li`
  font-size: 18px;
  color: ${(props) => props.color};
  &:hover, &:active {
    font-weight: bold;
    color: #1b262c;
  }
`;
