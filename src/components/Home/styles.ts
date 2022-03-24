import { styled } from '@mui/material';

export const MainHome = styled('main')(({ theme }) => ({
  color: theme.palette.primary.contrastText,
  backgroundColor: theme.palette.primary.light,
  padding: '20px',
  height: '100%',
  boxSizing: 'border-box'
}));

export const BodyByke = styled('main')`
  margin: 0 auto;
  width: 100%;
  max-width: 1600px;
  height: calc(100% - 230px);

  form {
    width: 100%;
  }
`;
