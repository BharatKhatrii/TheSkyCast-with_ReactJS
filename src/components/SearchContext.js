// SearchContext.js
import { createContext, useContext, useState } from 'react';

const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [city, setCity] = useState('');

  return (
    <SearchContext.Provider value={{city, setCity }}>
      {children}
    </SearchContext.Provider>
  );
};

export const useSearchContext = () => {
  return useContext(SearchContext);
};
