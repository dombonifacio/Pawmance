import { useState } from "react";
import { useEffect } from "react";

export const useLocalStorage = (key, initialValue) => {

    const calculateDefaultValue = () => {
        const storedValue = localStorage.getItem(key);
        return storedValue ? JSON.parse(storedValue) : initialValue;
    }

    const [value, setValue] = useState(calculateDefaultValue);

    const updateValue = (newValue) => {
        setValue(newValue);
    }

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
    }, [key, value])


    return  [value, updateValue];
}


