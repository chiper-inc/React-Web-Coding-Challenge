import { globalStyles } from '@/styles/globalStyles';
import styled from 'styled-components';

export const Container = styled.div`
  border: 1px solid #ccc;
  padding: ${globalStyles.metrics.padding};
  margin-top: ${globalStyles.metrics.margin};
  margin-bottom: ${globalStyles.metrics.margin};
  width: 100%;
  min-height: 100px;
`;
