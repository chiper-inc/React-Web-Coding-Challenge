import { globalStyles } from '@/styles/globalStyles';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;
  padding: ${globalStyles.metrics.padding};
  background-color: ${globalStyles.colors.silver};
  margin-bottom: ${globalStyles.metrics.margin};
`;
