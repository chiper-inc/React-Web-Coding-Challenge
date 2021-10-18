import { globalStyles } from '@/styles/globalStyles';
import styled from 'styled-components';

export const Container = styled.div`
  border: 1px solid #eee;
  padding: ${globalStyles.metrics.padding};
  margin: 32px auto;
  box-shadow: ${globalStyles.colors.boxShadow};
  width: 100%;
  min-height: 100px;
`;
