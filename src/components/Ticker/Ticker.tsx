import React from 'react';
import { Avatar, Box, Card, CardContent, CardHeader, Chip, Stack } from '@mui/material';
import ITickerComponent from '../../interfaces/ITickerComponent';
import CurrencyFormat from 'react-currency-format';

export function Ticker({ ticker }: ITickerComponent) {
    return ticker && (
        <Box>
            <CardHeader
                title={ticker.symbol}
                subheader={ticker.longName}
                avatar={<Avatar src={ticker.logourl} />} />
            <CardContent >
                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1}>
                    <Chip label={ticker.currency} />
                    <Chip label={<CurrencyFormat value={ticker.regularMarketPrice} displayType='text' thousandSeparator prefix='R$' />} />
                </Stack>
            </CardContent>
        </Box>
    )
}
