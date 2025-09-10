import React from 'react';

interface DeleteButtonProps {
  onClick: () => void;
  label?: string;
}

export const DeleteButton: React.FC<DeleteButtonProps> = ({ onClick, label = 'Delete' }) => (
  <button
    onClick={onClick}
    className="inline-flex items-center px-3 py-1 bg-red-500 hover:bg-red-600 text-white text-sm rounded-md transition"
  >
    🗑️ {label}
  </button>
);
