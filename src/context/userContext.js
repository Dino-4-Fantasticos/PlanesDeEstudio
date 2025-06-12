import { createContext, useCallback, useState } from 'react';


const UserContext = createContext(undefined);

export const UserProvider = ({ children }) => {
    const [loggedUser, setLoggedUser] = useState(null);

    const login = useCallback((userSession) => setLoggedUser(userSession), []);
    const logout = useCallback(() => setLoggedUser(null), []);

    const providerValue = {
        loggedUser, login, logout
    }

    return (
        <UserContext.Provider value={providerValue}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContext;
