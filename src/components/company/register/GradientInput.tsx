import React from 'react';

const GradientInput = React.forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement>
>(({ style, ...props }, ref) => (
  <input
    ref={ref}
    style={{
      border: '1px solid',
      borderImageSource: 'linear-gradient(90deg, #CE2D52 0%, #F05921 100%)',
      borderImageSlice: 1,
      ...style,
    }}
    {...props}
  />
));

export default GradientInput;
