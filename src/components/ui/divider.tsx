import React from 'react';

interface DividerProps {
  label?: string;
  className?: string;
}

export const Divider: React.FC<DividerProps> = ({ label, className = '' }) => {
  if (!label) {
    return <hr className={`my-6 border-gray-300 ${className}`} />;
  }

  return (
    <div className={`flex items-center my-6 ${className}`}>
      <div className="flex-grow border-t border-gray-300" />
      <span className="mx-4 text-gray-500 text-sm">{label}</span>
      <div className="flex-grow border-t border-gray-300" />
    </div>
  );
};
