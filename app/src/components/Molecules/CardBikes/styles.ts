import { globalStyles } from '@/styles/globalStyles';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: stretch;
  justify-content: flex-start;
`;

export const Infos = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  width: 100%;
  padding-top: ${globalStyles.metrics.padding};
`;

export const Title = styled.p`
  margin: 0;
  padding: 0;
  font-size: 16px;
  font-weight: 700;
  flex-grow: 1;
`;

export const Description = styled.p`
  margin: 0;
  padding: 0;
  font-size: 12px;
  font-weight: 300;
  flex-grow: 2;
  width: 100%;
`;

export const NoContent = styled.p`
  margin: 0;
  padding: 0;
  font-size: 16px;
  flex-grow: 2;
  min-height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  color: #ccc;
  background-color: #eee;
`;

export const Details = styled.p`
  margin: 0;
  padding: 0;
  font-size: 10px;
  font-weight: 200;
  color: ${globalStyles.colors.black50};
  flex-grow: 1;
`;
