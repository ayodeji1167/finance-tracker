import { Box } from '@chakra-ui/react';
import React, { ReactNode } from 'react';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div>
      <Box my={'2rem'}>Test Layout for landing page</Box>

      {children}
    </div>
  );
}
