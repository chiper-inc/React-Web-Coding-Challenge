import React, { createContext, useContext, useState } from 'react';

interface ToastContextData {
  open: boolean;
  type?: string;
  message?: string | object;
  showToast: (type: string, message: string) => void;
  hideToast: () => void;
}

export const ToastContext = createContext<ToastContextData>(
  {} as ToastContextData,
);

export const ToastProvider: React.FC = ({ children }) => {
  const [currentOpening, setCurrentOpening] = useState<boolean>(false);
  const [currentType, setCurrentType] = useState<string>(`info`);
  const [currentMessage, setCurrentMessage] = useState<string | object>(``);

  const showToast = (type: string, message: string | object): void => {
    setCurrentOpening(true);
    setCurrentType(type);
    setCurrentMessage(message);
  };

  const hideToast = (): void => setCurrentOpening(false);

  return (
    <ToastContext.Provider
      value={{
        open: currentOpening,
        type: currentType,
        message: currentMessage,
        showToast,
        hideToast,
      }}
    >
      {children}
    </ToastContext.Provider>
  );
};

const useToast = () => useContext(ToastContext);

export default useToast;
