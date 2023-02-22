import React from 'react';
import { Avatar, Card, CardContent, CardHeader, Chip, Stack } from '@mui/material';
import ITickerComponent from '../../interfaces/ITickerComponent';
import CurrencyFormat from 'react-currency-format';

export function Ticker({ ticker }: ITickerComponent) {
    return ticker && (
        <Card elevation={0}>
            <CardHeader
                title={ticker.symbol}
                subheader={ticker.longName}
                avatar={<Avatar src={ticker.logourl} />} />
            <CardContent >
                <Stack direction="row" spacing={1}>
                    <Chip label={<CurrencyFormat value={ticker.regularMarketPrice} displayType='text' thousandSeparator prefix='R$' />} />
                    <Chip label={ticker.currency} />
                </Stack>
            </CardContent>
        </Card>
    );
}
