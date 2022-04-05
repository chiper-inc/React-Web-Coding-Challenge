import React from 'react';
import { Box, Skeleton } from "@mui/material";

const SkeletoList = () => {
  const listDefault = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  return (
        <Box sx={{
          height: 'calc(100% - 80px)',
          overflow: 'hidden'
        }}>
            {listDefault.map((value, index) => <Skeleton key={`skeleton-id:${index}`} variant={'rectangular'} sx={{
              width: '100%',
              marginBottom: '20px',
              height: '130px',
              borderRadius: '10px'
            }} />
            )}
        </Box>
  );
};

export { SkeletoList };
