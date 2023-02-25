import { createContext, useState } from "react"
import { ptBR, enUS } from '@mui/material/locale';

export type SupportedLocales = "ptBR" | "enUS";
export const defaultLocale = "ptBR";
export const locales = { ptBR, enUS };
export const LanguageContext = createContext<LanguageContextProps>({ locale: "ptBR", setLocale: null });

export interface LanguageProviderProps {
    children?: React.ReactNode;
}

export interface LanguageContextProps {
    locale: SupportedLocales;
    setLocale: any,
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
    const [locale, setLocale] = useState<SupportedLocales>("ptBR")

    return (
        <LanguageContext.Provider value={{ locale, setLocale } as LanguageContextProps}>
            {children}
        </LanguageContext.Provider>
    )
}