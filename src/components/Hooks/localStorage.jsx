import React from "react";

function useLocalStorage(itemName, initialValue) {
    const localStorageItem = localStorage.getItem(itemName);
  
    let parsed;
  
    if (!localStorageItem) {
      localStorage.setItem(itemName, JSON.stringify([]));
      parsed = [];
    } else {
      parsed = JSON.parse(localStorageItem);
    }
  
    const [item, setItem] = React.useState(parsed);
  
    const saveLocalStorage = (newItem) => {
      localStorage.setItem(itemName, JSON.stringify(newItem));
  
      setItem(newItem);
    };
  
    return [item, saveLocalStorage];
  }

  export { useLocalStorage }