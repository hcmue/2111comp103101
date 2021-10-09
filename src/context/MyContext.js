import { createContext, useState } from "react";

export const MyContext = createContext({
    count: 0,
    isLogin: false,
    setCount: () => { },
    setIsLogin: () => { }
});

export const MyContextProvider = ({ children }) => {
    const [myCount, setMyCount] = useState(0);
    const [isLogged, setIsLogged] = useState(false);
    return (
        <MyContext.Provider value={{
            count: myCount,
            setCount: setMyCount,
            isLogin: isLogged,
            setIsLogged: setIsLogged
        }}>
            {children}
        </MyContext.Provider>
    )
};