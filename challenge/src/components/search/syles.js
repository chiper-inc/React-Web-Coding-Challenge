import { FaRegCalendarAlt } from "react-icons/fa";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 25px;
`;
export const SearchForm = styled.div`
  input {
    position: relative;
    font-size: 1.2rem;
    box-sizing: border-box;
    font-size: 1.1rem;
  }
  input[type="text"] {
    background: rgb(235, 230, 230);
    border: none;
    width: 290px;
    height: 36px;
    outline: none;
    padding: 0 20px;
    border-radius: 25px 0 0 25px;
    font-size: 1rem;
  }
  input[type="submit"] {
    position: relative;
    border-radius: 0 25px 25px 0;
    width: 90px;
    height: 36px;
    border: none;
    outline: none;
    cursor: pointer;
    background: #006dae;
    color: #fff;
  }
`;

export const PickerStart = styled.div`
  input {
    height: 32px;
    width: 110px;
    border-radius: 12px;
    outline: none;
    border: 3px solid rgb(235, 230, 230);
    text-align: center;
  }
`;

export const IconoCalendar = styled(FaRegCalendarAlt)`
  font-size: 26px;
  color: #006dae;
  margin-right: 15px;
`;
