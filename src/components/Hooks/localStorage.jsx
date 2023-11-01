import React from "react";

function useLocalStorage(itemName, initialValue) {

    const [item, setItem] = React.useState(initialValue);
    const [loading,setLoading] = React.useState(true)
    const [error,setError] = React.useState(false)

    React.useEffect(() => {
      setTimeout(() => {
        try {
          const localStorageItem = localStorage.getItem(itemName);
        let parsed;
  
        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsed = initialValue;
        } else {
          parsed = JSON.parse(localStorageItem);
          setItem(parsed)
        }
      
        setLoading(false);
        } catch(error) {
          setError(true)
          setLoading(false);
        }
      },100);
    }, [])

    const saveLocalStorage = (newItem) => {
      localStorage.setItem(itemName, JSON.stringify(newItem));
  
      setItem(newItem);
    };
  
    return {
      item, 
      saveLocalStorage, 
      loading, 
      error 
    };
  }

  export { useLocalStorage }