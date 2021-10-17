import { globalStyles } from '@/styles/globalStyles';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-around;
  gap: 10px;
  padding: ${globalStyles.metrics.padding};
  background-color: ${globalStyles.colors.silver};
  margin-bottom: ${globalStyles.metrics.margin};

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;
