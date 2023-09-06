import React, { useState, useEffect, createContext } from "react";

import { fetchDataFromApi } from "../utils/api";

export const Context = createContext();
export const AppContext = (props) => {
  const [loading, setLoading] = useState(true);
  const [searchResults, setSearchResults] = useState([]);
  const [selectCategory, setSelectCategory] = useState("New");
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    fetchSelectedCategoryData(selectCategory);
  }, [selectCategory]);

  const fetchSelectedCategoryData = async (query) => {
    setLoading(true);
    const data = await fetchDataFromApi(`search/?q=${query}`);
    console.log(data.contents);
    setSearchResults(data.contents);
    setLoading(false);
  };

  return (
    <Context.Provider
      value={{
        loading,
        setLoading,
        searchResults,
        setSearchResults,
        selectCategory,
        setSelectCategory,
        mobileMenu,
        setMobileMenu,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};
