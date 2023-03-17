
import React, { createContext, useEffect, useState } from 'react';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    // https://api.themoviedb.org/3/search/multi?api_key=60328c60edaea9ec7115178b6e8c7a3a&query=${searchTerm}
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    const collections = (searchTerm) => {
        setLoading(true);
        setTimeout(() => {
            fetch(`https://api.themoviedb.org/3/search/multi?api_key=60328c60edaea9ec7115178b6e8c7a3a&query=${searchTerm}`)
                .then(res => res.json())
                .then(data => setData(data))
                .finally(() => setLoading(false));
        }, 1000);
    }

    useEffect(() => {
        setLoading(true); // set loading to true before fetching data
    }, []);


    const authInfo = {
        collections,
        data,
        loading,
        setLoading
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;