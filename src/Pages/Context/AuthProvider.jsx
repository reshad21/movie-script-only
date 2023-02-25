
import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    // https://api.themoviedb.org/3/search/multi?api_key=60328c60edaea9ec7115178b6e8c7a3a&query=${searchTerm}
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