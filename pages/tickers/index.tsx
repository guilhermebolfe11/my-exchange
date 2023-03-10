import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { Ticker } from '../../src/components/Ticker/Ticker';
import IPageTickerQuery from '../../src/interfaces/IPageTickerQuery';
import React, { useEffect, useState } from 'react';
import api from '../../src/services/api';
import ITickerResponse from '../../src/interfaces/ITickerResponse';
import { TickersFilter } from '../../src/components/Ticker/TickersFilter';
import { ITickerFilter, TickerRange } from '../../src/interfaces/ITickerFilter';
import { Box, Breadcrumbs, CardContent, CardHeader, Typography } from '@mui/material';
import Link from 'next/link';

const Tickers: NextPage = () => {
    const router = useRouter()
    const { tickers } = router.query as IPageTickerQuery
    const isString = typeof tickers === 'string' || tickers instanceof String;

    const [tickersResponse, setTickersResponse] = useState<ITickerResponse | undefined>(undefined);
    const [filter, setFilter] = useState<ITickerFilter>({ dividends: true, fundamental: true, interval: TickerRange.ONE_DAY, range: TickerRange.ONE_DAY });

    useEffect(() => {
        searchTickersAsync(tickers);
    }, [tickers]);


    const searchTickersAsync = async (tickers: string[] | string | undefined) => {
        if (!tickers) {
            return;
        }

        let response = await api.get<ITickerResponse>(`/quote/${tickers}?range=1d&interval=1d&fundamental=true&dividends=true`);

        setTickersResponse(response.data);
    }

    return (
        <Box>
            <Breadcrumbs>
                <Link href="/" >
                    Home
                </Link>
                <Typography color="text.primary">Tickers</Typography>
            </Breadcrumbs>
            <CardHeader title={`Tickers - ${tickersResponse?.requestedAt}`} subheader={<TickersFilter filter={filter} />} />
            {tickersResponse &&
                (isString ? <Ticker ticker={tickersResponse.results[0]} /> :
                    tickersResponse?.results?.map((t, i) => { return (<Ticker key={`ticker-${i}`} ticker={t} />) }))
            }
        </Box>
    );
};


export default Tickers;