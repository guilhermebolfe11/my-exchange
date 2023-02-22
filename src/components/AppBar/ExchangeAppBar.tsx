import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';


export default function ExchangeAppBar() {
  return (
    <AppBar position="static" color='secondary'>
      <Container>
        <Toolbar>
          <CurrencyExchangeIcon sx={{ mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              color: 'inherit',
              textDecoration: 'none'
            }}
          >
            My Exchange
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
}