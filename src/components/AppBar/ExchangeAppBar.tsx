import { AppBar, IconButton, Toolbar, Typography } from '@mui/material';
import { useState } from 'react';
import ExchangeDrawer from './ExchangeDrawer';
import MenuIcon from '@mui/icons-material/Menu';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import { Search } from '../Search/Search';

export default function ExchangeAppBar() {
  const [open, setOpen] = useState(false);
  const handleDrawerToggle = () => {
    setOpen(!open);
  };


  return (<>
    <AppBar position="static">
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <CurrencyExchangeIcon sx={{ mr: 1 }} />
        <Typography
          variant="h6"
          noWrap
          sx={{
            color: 'inherit',
            textDecoration: 'none',
            flexGrow: 1,
            display: { xs: 'none', sm: 'block' }
          }}
        >
          My Exchange
        </Typography>
        <Search sx={{ ml: 2, width: 300 }} />
      </Toolbar>
    </AppBar>
    <ExchangeDrawer open={open} handleDrawerToggle={handleDrawerToggle} />
  </>
  );
}