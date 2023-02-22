import React from 'react';
import Link from 'next/link';
import { Card, CardContent, List, ListItemButton, ListItemText } from '@mui/material';
import ISearchResponse from '../../interfaces/ISearchResponse';

export function SearchResponse({ stocks }: ISearchResponse) {

    return (
        <Card elevation={0}>
            <CardContent >
                <List>
                    {stocks && stocks.slice(0, 10).map((s, i) => {
                        return (
                            <Link
                                key={`link-${i}`}
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
