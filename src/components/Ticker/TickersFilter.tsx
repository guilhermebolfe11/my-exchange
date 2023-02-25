import React from 'react';
import { Chip, Stack } from '@mui/material';
import ITickersFilterInput from '../../interfaces/ITickersFilterInput';
import { TickerRange } from '../../interfaces/ITickerFilter';

export function TickersFilter({ filter }: ITickersFilterInput) {
    return filter && (
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1} margin={1}>
            {filter.dividends && <Chip label="Dividendos" />}
            {filter.fundamental && <Chip label="Fundamental" />}
            {filter.interval && <Chip label={getValueTickerRange("Range", filter.interval)} />}
            {filter.range && <Chip label={getValueTickerRange("Interval", filter.range)} />}
        </Stack>
    );
}

function getValueTickerRange(prefix: string, range: TickerRange): string {
    switch (range) {
        case TickerRange.ONE_DAY:
            return `${prefix}: Um dia`;
        default:
            return `${prefix}: ${range}`;
    }
}