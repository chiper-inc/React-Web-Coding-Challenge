import { globalStyles } from '@/styles/globalStyles';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  margin-bottom: ${globalStyles.metrics.margin};
`;
