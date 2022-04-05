import { styled } from '@mui/material';

export const Item = styled('div')(({ theme: { palette: { primary } } }) => ({
  borderRadius: '10px',
  padding: '20px 10px',
  border: `1px solid ${primary.main}`,
  display: 'flex'
}));

export const ContentImg = styled('section')`
  width: 100px;
  margin-right: 20px;
  height: 130px;
  img {
    width: 100%;
    border: 1px solid;
    padding: 10px;
    border-radius: 5px;
    box-sizing: border-box;
    
  }
  
`;

export const MoreDetails = styled('section')`

    width: 60%;
  
`;
