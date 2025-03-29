import React from 'react';

interface iPhoneContainerProps {
  children: React.ReactNode;
}

export const iPhoneContainer: React.FC<iPhoneContainerProps> = ({ children }) => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-[390px] h-[844px] bg-white shadow-xl rounded-[3rem] overflow-hidden relative">
        {/* iPhone notch */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[150px] h-[25px] bg-black rounded-[0_0_15px_15px]" />
        {children}
      </div>
    </div>
  );
}; 