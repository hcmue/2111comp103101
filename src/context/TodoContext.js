import { createContext, useState } from "react";

export const TodoContext = createContext({
    data: [],
    setData: () => { },
});

const initData = [
    {
        "id": 1,
        "name": "Học React Hooks - useEffect",
        "isCompleted": false,
        "deadline": '2021-10-10'
    },
    {
        "id": 2,
        "name": "Học React Hooks - useContext",
        "isCompleted": false,
        "deadline": '2021-10-13'
    },
    {
        "id": 3,
        "name": "Học React Hooks - useState",
        "isCompleted": true,
        "deadline": '2021-10-09'
    }
];

export const TodoContextProvider = ({ children }) => {
    const [myData, setMyData] = useState(initData);
    return (
        <TodoContext.Provider value={{
            data: myData,
            setData: setMyData,
        }}>
            {children}
        </TodoContext.Provider>
    )
};