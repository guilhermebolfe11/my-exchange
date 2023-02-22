import React from 'react';
import Link from 'next/link';
import { Card, CardContent, List, ListItemButton, ListItemText } from '@mui/material';
import ISearchResponse from '../../interfaces/ISearchResponse';

export function SearchResponse({ stocks }: ISearchResponse) {

    return stocks && (
        <Card elevation={0}>
            <CardContent >
                <List>
                    {stocks.slice(0, 10).map(s => {
                        return (
                            <Link
                                href={{
                                    pathname: '/tickers',
                                    query: { tickers: [s] },
                                }}
                            >
                                <ListItemButton>
                                    <ListItemText primary={s} />
                                </ListItemButton>
                            </Link>
                        )
                    })}
                </List>
            </CardContent>
        </Card>
    );
}
