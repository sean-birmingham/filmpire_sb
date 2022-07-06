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
import { useTheme } from '@mui/material/styles';

const NavBar = () => {
  const isMobile = useMediaQuery('(max-width:600px)');
  const theme = useTheme();

  const isAuthenticated = true;

  return (
    <AppBar position="fixed">
      <Toolbar
        sx={{
          height: '80px',
          display: 'flex',
          justifyContent: 'space-between',
          marginLeft: { lg: '240px' },
          flexWrap: { sm: 'wrap' },
        }}
      >
        {isMobile && (
          <IconButton
            color="inherit"
            edge="start"
            style={{ outline: 'none' }}
            onClick={() => {}}
            sx={{ marginRight: '10px', display: { sm: 'none' } }}
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
              sx={{}}
            >
              {!isMobile && <>My Movies &nbsp;</>}
              <Avatar style={{ width: 30, height: 30 }} alt="Profile" />
            </Button>
          )}
        </div>
        {isMobile && 'Search...'}
      </Toolbar>
    </AppBar>
  );
};
export default NavBar;
