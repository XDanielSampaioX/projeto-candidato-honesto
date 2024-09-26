import React, { createContext, useState } from "react";

type InputContextType = {
    termoDeBusca: string,
    setTermoDeBusca: (term:string) => void
}

type InputContextProviderProps = {
    children : React.ReactNode
}


const InputContext = createContext<InputContextType>({
    termoDeBusca: "",
    setTermoDeBusca: () => {}
});

export const InputContextProvider = ({children}: InputContextProviderProps) => {
    const [termoDeBusca, setTermoDeBusca] = useState("");

    return (
        <InputContext.Provider value={{termoDeBusca, setTermoDeBusca}}>
            {children}
        </InputContext.Provider>
    )
}

export default InputContext

