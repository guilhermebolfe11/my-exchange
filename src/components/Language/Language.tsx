import { useContext } from 'react';
import Image from 'next/image';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { LanguageContext, SupportedLocales, locales } from '../../context/LanguageContext';
import { Box } from '@mui/material';
import useTranslation from '../../hooks/useTranslation';

export default function Language() {
    const { locale, setLocale } = useContext(LanguageContext);
    const { t } = useTranslation();
    return (
        <Autocomplete
            options={Object.keys(locales)}
            value={locale}
            getOptionLabel={getLabel}
            disableClearable
            fullWidth
            renderOption={(props, option) => (
                <Box component="li" {...props}>
                    <Image
                        style={{ marginRight: 2, flexShrink: 0 }}
                        loading="lazy"
                        width="20"
                        height="15"
                        src={`https://flagcdn.com/w20/${option.substring(2, 4).toLowerCase()}.png`}
                    />
                    {getLabel(option)}
                </Box>
            )}
            onChange={(_: any, newValue: string | null) => {
                setLocale(newValue as SupportedLocales);
            }}
            renderInput={(params) => (
                <TextField {...params} variant="standard" />
            )}
        />
    );
}

function getLabel(locale: string): string {
    switch (locale) {
        case "ptBR":
            return " BR";
        case "enUS":
            return " US";
        default:
            return locale;
    }
}