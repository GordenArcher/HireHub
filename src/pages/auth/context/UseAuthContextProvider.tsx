import React, { createContext, useEffect, useState } from 'react';
import { get_auth } from '../../../services/api';

interface AuthContextType {
  is_authenticated: boolean;
  setIs_authenticated: React.Dispatch<React.SetStateAction<boolean>>;
}

interface Children {
  children: React.ReactNode;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const UseAuthContextProvider = ({ children }: Children) => {
    const [is_authenticated, setIs_authenticated] = useState<boolean>(false);
    
    const getAuth = async () => {
        const response = await get_auth();
        console.log(response);
        setIs_authenticated(response.auth);
    };

    useEffect(() => {
        getAuth();
    }, []);

    return (
        <AuthContext.Provider value={{ is_authenticated, setIs_authenticated }}>
        {children}
        </AuthContext.Provider>
    );
};

export default UseAuthContextProvider;
export { AuthContext };
