import { useState } from 'react';
import {
  AppBar,
  IconButton,
  Toolbar,
  Drawer,
  Button,
  Avatar,
  useMediaQuery,
} from '@mui/material';
import {
  Menu,
  AccountCircle,
  Brightness4,
  Brightness7,
} from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { useTheme } from '@mui/system';

import Sidebar from './Sidebar';

const NavBar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const isMobile = useMediaQuery('(max-width:600px)');
  const theme = useTheme();

  const isAuthenticated = true;

  return (
    <>
      <AppBar position="fixed">
        <Toolbar
          sx={{
            height: '80px',
            display: 'flex',
            justifyContent: 'space-between',
            marginLeft: '240px',
            [theme.breakpoints.down('sm')]: {
              marginLeft: 0,
              flexWrap: 'wrap',
            },
          }}
        >
          {isMobile && (
            <IconButton
              color="inherit"
              edge="start"
              style={{ outline: 'none' }}
              sx={{ mr: 2 }}
            >
              <Menu />
            </IconButton>
          )}
          <IconButton color="inherit" sx={{ ml: 1 }}>
            {theme.palette.mode === 'dark' ? <Brightness7 /> : <Brightness4 />}
          </IconButton>
          {!isMobile && 'Search...'}
          <div>
            {!isAuthenticated ? (
              <Button color="inherit">
                Login &nbsp; <AccountCircle />
              </Button>
            ) : (
              <Button
                color="inherit"
                component={Link}
                to={`/profile/:id`}
                sx={{
                  '&:hover': {
                    color: 'white !important',
                    textDecoration: 'none',
                  },
                }}
              >
                {!isMobile && <>My Movies &nbsp;</>}
                <Avatar style={{ width: 30, height: 30 }} alt="Profile" />
              </Button>
            )}
          </div>
          {isMobile && 'Search...'}
        </Toolbar>
      </AppBar>
      <div>
        <nav
          sx={{ [theme.breakpoints.up('sm')]: { width: 240, flexShrink: 0 } }}
        >
          {isMobile ? (
            <Drawer
              variant="temporary"
              anchor="right"
              open={mobileOpen}
              ModalProps={{ keepMounted: true }}
              sx={{ width: 240 }}
            >
              <Sidebar setMobileOpen={setMobileOpen} />
            </Drawer>
          ) : (
            <Drawer variant="permanent" open>
              <Sidebar setMobileOpen={setMobileOpen} />
            </Drawer>
          )}
        </nav>
      </div>
    </>
  );
};
export default NavBar;
