import { createContext, useMemo, useContext } from "react"
import { ThemeProvider as ThemeProviderMUI, createTheme } from '@mui/material/styles';
import theme from '../theme';
import { LanguageContext, locales } from "./LanguageContext";

export const ThemeContext = createContext<ThemeContextProps>({});

export interface ThemeProviderProps {
    children?: React.ReactNode;
}

export interface ThemeContextProps {
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
    const { locale } = useContext(LanguageContext);
    let themeWithLocale = useMemo(
        () => createTheme(theme, locales[locale]),
        [locale],
    );

    return (
        <ThemeContext.Provider value={{}}>
            <ThemeProviderMUI theme={themeWithLocale} >
                {children}
            </ThemeProviderMUI>
        </ThemeContext.Provider>
    )
}