import React, { createContext, useContext, useState } from 'react';

const MotionContext = createContext();

export const MotionProvider = ({ children }) => {
  const [motionStatus, setMotionStatus] = useState(null);
  const [userResponse, setUserResponse] = useState(null);

  const updateMotionStatus = (status) => {
    setMotionStatus(status);
  };

  const updateUserResponse = (response) => {
    setUserResponse(response);
  };

  return (
    <MotionContext.Provider
      value={{
        motionStatus,
        userResponse,
        updateMotionStatus,
        updateUserResponse,
      }}
    >
      {children}
    </MotionContext.Provider>
  );
};

export const useMotionContext = () => {
  return useContext(MotionContext);
};
