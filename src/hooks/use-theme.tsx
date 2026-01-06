import React, { createContext, useContext, useEffect, useState } from "react";


const ThemeContext = createContext<{
    theme: string;
    setTheme: (theme: string) => void;
} | undefined>(undefined);

interface ThemeProviderProps {
    children: React.ReactNode;
}

export function ThemeProvider({ children } : ThemeProviderProps ) {
    const [theme, setTheme] = useState(() => localStorage.getItem('app-theme') || 'light');


    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('app-theme', theme);
    }, [theme])

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error("useTheme must be used within a ThemeProvider");
    }
    return context;
}

