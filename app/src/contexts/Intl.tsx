import React, { createContext, useContext, useEffect, useState } from 'react';
import { LangStrings, locales, defaultLocale } from '@/languages/Strings';

interface LanguageContextData {
  defaultLocale: string;
  text(key: string): object;
  currentLocale: string;
  updateLocale(key: string): void;
  avaliableLocales: Array<string>;
}

export const LanguageContext = createContext<LanguageContextData>(
  {} as LanguageContextData,
);

export const LanguageProvider: React.FC = ({ children }) => {
  const [currentLocale, setCurrentLocale] = useState<string>(defaultLocale);

  const updateLocale = (key: string): void => {
    window.localStorage.setItem(`locale`, key);
    setCurrentLocale(key);
  };

  const restoreLocale = (): void => {
    const savedLocale = window.localStorage.getItem(`locale`);
    if (savedLocale) setCurrentLocale(savedLocale);
  };

  const text = (key: string): object => {
    if (!LangStrings[currentLocale][key]) {
      console.warn(`No string '${key}' for locale '${currentLocale}'`);
    }

    return (
      LangStrings[currentLocale][key] || LangStrings[defaultLocale][key] || ``
    );
  };

  useEffect(() => {
    restoreLocale();
  }, []);

  return (
    <LanguageContext.Provider
      value={{
        defaultLocale,
        updateLocale,
        text,
        currentLocale,
        avaliableLocales: locales,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

const useTranslation = () => useContext(LanguageContext);

export default useTranslation;
