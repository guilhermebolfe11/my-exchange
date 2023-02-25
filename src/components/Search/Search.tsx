import React, { useState, useEffect } from 'react';
import { InputAdornment, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import api from "../../services/api"
import ISearchResponse from '../../interfaces/ISearchResponse';
import { SearchResponse } from './SearchResponse';
import useTranslation from '../../hooks/useTranslation';

export function Search() {
    const { t } = useTranslation();
    const [term, setTerm] = useState<string>('');
    const [searchResponse, setSearchResponse] = useState<ISearchResponse | undefined>(undefined);

    useEffect(() => {
        searchTermAsync(term);
    }, [term]);


    const handleOnChange = (term: string) => {
        if (term.length > 2) {
            setTerm(term);
        }
    }

    const searchTermAsync = async (term: string) => {
        if (term.length <= 2) {
            return;
        }

        let response = await api.get<ISearchResponse>("/available", {
            params: {
                search: term
            }
        });

        setSearchResponse(response.data);
    }

    return (
        <>
            <TextField id="search-text"
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <SearchIcon />
                        </InputAdornment>
                    ),
                }}
                variant="outlined"
                fullWidth
                autoComplete="off"
                helperText={t("Search.Minimum")}
                placeholder='HGRU11'
                onChange={e => handleOnChange(e.target.value)}
            />
            <SearchResponse stocks={searchResponse?.stocks} />
        </>
    );
}
