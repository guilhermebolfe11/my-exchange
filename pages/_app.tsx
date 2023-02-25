import React from 'react';
import Head from 'next/head';
import { AppProps } from 'next/app';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider, EmotionCache } from '@emotion/react';
import createEmotionCache from '../src/createEmotionCache';
import { Box } from '@mui/material';
import ExchangeAppBar from '../src/components/AppBar/ExchangeAppBar';
import { LanguageProvider } from '../src/context/LanguageContext';
import { ThemeProvider } from '../src/context/ThemeContext';


// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

export default function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  return (
    <CacheProvider value={emotionCache}>
      <LanguageProvider>
        <Head>
          <meta name="viewport" content="initial-scale=1, width=device-width" />
          <title>My Exchange</title>
        </Head>
        <ThemeProvider>
          <CssBaseline />
          <ExchangeAppBar />
          <Box sx={{ flexGrow: 1, padding: 1, backgroundColor: "#fff" }}>
            <Component {...pageProps} />
          </Box>
        </ThemeProvider>
      </LanguageProvider>
    </CacheProvider>
  );
}