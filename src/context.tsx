import React, { useState, useContext, useEffect } from "react";
import { useCallback } from "react";
const URL = "https://openlibrary.org/search.json?title=";
const AppContext = React.createContext();
const AppProvider = ({ children }) => {
    const [searchTerm, setSearchTerm] = useState("search");
    const [books, setBooks] = useState(true);
    const [loading, setLoading] = useState(true);
    const [resultTitle, setResultTitle] = useState("");

    const fetchBooks = useCallback(async () => {
        setLoading(true);
        try {
            const response = await fetch(`${URL}${searchTerm}`);
            const data = await response.json();
            console.log(data)
            const { docs } = data;
            console.log(docs);
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    }, [searchTerm]);

    useEffect(() => {
        fetchBooks();
    }, [searchTerm, fetchBooks]);

    return (
        <AppContext.Provider value={{
            loading, books, setSearchTerm, resultTitle, setResultTitle
        }}>
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext);
}

export { AppContext, AppProvider };

