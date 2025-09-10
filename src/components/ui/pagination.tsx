import React, { useState } from 'react';
import Pagination from '@mui/material/Pagination';

interface PaginationProps {
  totalPages: number;
  onPageChange: (page: number) => void;
  color?: 'primary' | 'secondary' | 'standard';
  disabled?: boolean;
}

export const UIPagination: React.FC<PaginationProps> = ({
  totalPages,
  onPageChange,
  color = 'primary',
  disabled = false,
}) => {
  const [page, setPage] = useState(1);

  const handleChange = (_event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
    onPageChange(value);
  };

  return (
    <Pagination
      count={totalPages}
      page={page}
      onChange={handleChange}
      color={color}
      disabled={disabled}
      className="mt-4"
    />
  );
};
