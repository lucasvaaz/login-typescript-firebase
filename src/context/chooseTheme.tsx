import { createContext, Dispatch, ReactNode, SetStateAction, useState } from "react"

export const ChooseThemeContext = createContext<ThemeProps>({} as ThemeProps)

interface ContextProps {
    children: ReactNode;
}

interface ThemeProps {
    isDarkTheme: boolean;
    setIsDarkTheme: (isDarkTheme: boolean) => void;
}


export function ChooseThemeProvider({ children }: ContextProps){
    const [isDarkTheme, setIsDarkTheme] = useState<boolean >(true)


    
        return(
            <ChooseThemeContext.Provider value={{ isDarkTheme, setIsDarkTheme }}>
                {children}
            </ChooseThemeContext.Provider>
        )
}