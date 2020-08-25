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

export const InputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px 0;
`;

export const FilterTitle = styled.input`
  width: 45%;
  height: 30px;
  padding-left: 15px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  outline: none;
  transition: all 0.3s;
  &:hover {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  }
`;

export const DateContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const Label = styled.label`
  font-weight: bold;
`;

export const DateInput = styled.input`
  height: 30px;
  margin-left: 15px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  outline: none;
  transition: all 0.3s;
  &:hover {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  }
`;

export const Send = styled.button`
  height: 30px;
  margin-left: 20px;
  padding: 0 2%;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  background-color: white;
  transition: all .5s;
  cursor: pointer;
  &:hover {
    box-shadow: 0 0px 3px rgba(0,0,0,.3);
  }
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

export const Li = styled.li`
  font-size: 18px;
  color: ${(props) => props.color};
  &:hover, &:active {
    font-weight: bold;
    color: #1b262c;
  }
`;

