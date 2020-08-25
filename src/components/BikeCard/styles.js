import styled from 'styled-components';

export const Card = styled.li`
  display: flex;
  width: 100%;
  margin-bottom: 15px;
  border-radius: 8px;
  background-color: white;
  overflow: hidden;
  transition: all .3s;
  & img {
    width: 400px;
    height: 300px;
    object-fit: cover;
  }
  &:hover {
    box-shadow: 0 5px 10px 0 rgba(0,0,0,.3);
  }
`;

export const Description = styled.div`
  position: relative;
  width: 100%;
  padding: 2%;
  color: #1b262c;
  & h3 {
    font-size: 24px;
  }
  & p:nth-last-child(1) {
    position: absolute;
    bottom: 0;
    right: 0;
    transform: translate(-23px, -23px);
  }
`;
