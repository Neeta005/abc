import React from 'react';

interface EditButtonProps {
  onClick: () => void;
  label?: string;
}

export const EditButton: React.FC<EditButtonProps> = ({ onClick, label = 'Edit' }) => (
  <button
    onClick={onClick}
    className="inline-flex items-center px-3 py-1 bg-blue-500 hover:bg-blue-600 text-white text-sm rounded-md transition"
  >
    ✏️ {label}
  </button>
);
