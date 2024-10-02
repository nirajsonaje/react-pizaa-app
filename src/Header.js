import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';

function Header() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
          Pizza Ordering App
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
