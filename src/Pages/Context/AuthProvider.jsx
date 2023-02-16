
import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [data, setData] = useState([]);
    const collections = (searchTerm) => {
        fetch(`https://api.tvmaze.com/search/shows?q=${searchTerm}`)
            .then(res => res.json())
            .then(data => setData(data))
    }

    const authInfo = {
        collections,
        data
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;