import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { alpha, Autocomplete, InputAdornment, InputBase, ListItemButton, ListItemText, styled, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import api from "../../services/api"
import ISearchResponse from '../../interfaces/ISearchResponse';
import ISearchProps from '../../interfaces/ISearchProps';
import useTranslation from '../../hooks/useTranslation';

const SearchInput = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  }));
  
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
  
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
  }));
  

export function Search({ sx }: ISearchProps) {
    const { t } = useTranslation();
    const [term, setTerm] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);
    const [searchResponse, setSearchResponse] = useState<ISearchResponse | undefined>(undefined);

    useEffect(() => {
        searchTermAsync(term);
    }, [term]);


    const handleOnChange = (term: string) => {
        if (term.length > 2) {
            setLoading(true);
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

        setLoading(false);
        setSearchResponse(response.data);
    }

    return (
        <>
            <Autocomplete
                sx={sx}
                isOptionEqualToValue={() => true}
                options={searchResponse?.stocks ?? []}
                loading={loading}
                renderOption={(props, option) => (
                    <Link
                        key={`link-${option}`}
                        href={{
                            pathname: '/tickers',
                            query: { tickers: [option] },
                        }}
                    >
                        <ListItemButton>
                            <ListItemText primary={option} />
                        </ListItemButton>
                    </Link>
                )}
                renderInput={(params) => (
                    <TextField
                        {...params}
                        variant="standard"
                        placeholder={t("Search.Minimum")}
                        onChange={(e) => handleOnChange(e.target.value)}
                        InputProps={{
                            ...params.InputProps,
                            startAdornment: (
                                <InputAdornment position="start">
                                    <SearchIcon />
                                </InputAdornment>
                            )
                        }}
                    />
                )}
            />
        </>
    );
}
