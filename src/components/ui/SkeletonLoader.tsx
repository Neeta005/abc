import * as React from 'react';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';

interface SkeletonLoaderProps {
  variants?: ('text' | 'circular' | 'rectangular' | 'rounded')[];
  width?: number | string;
  height?: number | string;
  fontSize?: string | number;
  spacing?: number;
}

export const SkeletonLoader: React.FC<SkeletonLoaderProps> = ({
  variants = ['text', 'circular', 'rectangular', 'rounded'],
  width = 210,
  height = 60,
  fontSize = '1rem',
  spacing = 1,
}) => {
  return (
    <Stack spacing={spacing}>
      {variants.includes('text') && <Skeleton variant="text" sx={{ fontSize }} />}
      {variants.includes('circular') && <Skeleton variant="circular" width={40} height={40} />}
      {variants.includes('rectangular') && <Skeleton variant="rectangular" width={width} height={height} />}
      {variants.includes('rounded') && <Skeleton variant="rounded" width={width} height={height} />}
    </Stack>
  );
};
export default SkeletonLoader;