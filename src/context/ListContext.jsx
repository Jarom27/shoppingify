import { createContext, useState } from "react";

const ListContext = createContext();

export function ListProvider({children}){
    const [view, setView] = useState("shopping")
    const data = {
        view,
        setView
    }
    return (
        <ListContext.Provider value = {data}>
            {children}
        </ListContext.Provider>
    )
}
export default ListContext;