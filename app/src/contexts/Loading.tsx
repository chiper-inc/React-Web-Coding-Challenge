import React, { createContext, useContext, useState } from 'react';

interface LoadingContextData {
  loading: boolean;
  showLoading: () => void;
  hideLoading: () => void;
}

export const LoadingContext = createContext<LoadingContextData>(
  {} as LoadingContextData,
);

export const LoadingProvider: React.FC = ({ children }) => {
  const [currentLoading, setCurrentLoading] = useState<boolean>(false);

  const showLoading = (): void => setCurrentLoading(true);

  const hideLoading = (): void => setCurrentLoading(false);

  return (
    <LoadingContext.Provider
      value={{
        loading: currentLoading,
        showLoading,
        hideLoading,
      }}
    >
      {children}
    </LoadingContext.Provider>
  );
};

const useLoading = () => useContext(LoadingContext);

export default useLoading;
