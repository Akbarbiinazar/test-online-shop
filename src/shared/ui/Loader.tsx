import React from 'react';

export const Loader = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="loader w-16 h-16 border-4 border-t-transparent border-blue-500 rounded-full animate-spin"></div>
    </div>
  );
};
