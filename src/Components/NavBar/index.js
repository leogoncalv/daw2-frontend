import React, { useState } from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { useNavigate } from "react-router-dom";
import "./style.css";

import Logo from "../../assets/images/logo.png";

const pages = [, 'Categorias', 'Favoritos'];
const settings = ['Perfil'];

function NavBaL() {
  const navigate = useNavigate();

  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [profileOpen, setProfileOpen] = useState(false);
  const [categoriesOpen, setCategoriesOpen] = useState(false);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
    setProfileOpen(true);
  };

  const handleOpenCategoriesMenu = (event) => {
    setAnchorElNav(event.currentTarget);
    setCategoriesOpen(true);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
    setCategoriesOpen(false);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
    setProfileOpen(false);
  };

  const handleLogout = () => {
    navigate("/login");
  };

  const handleAddRecipe = () => {
    console.log("Adicione uma nova receita!");
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: '#F2E0C9' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>

          <Box
            sx={{
              width: '50px',
              height: '50px',
              backgroundImage: `url(${Logo})`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'contain',
              backgroundPosition: 'center',
            }}
          />

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={page === 'Categorias' ? handleOpenCategoriesMenu : handleCloseNavMenu}
                sx={{ my: 2, color: 'black', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>

            {profileOpen && (
              <Box
                sx={{
                  position: 'absolute',
                  top: '60px',
                  right: '20px',
                  width: '300px',
                  backgroundColor: '#FFF',
                  boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
                  borderRadius: '8px',
                  padding: '16px',
                  zIndex: 10,
                }}
              >
                <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
                  <Avatar alt="Letícia" src="/static/images/avatar/2.jpg" sx={{ width: 80, height: 80 }} />
                </Box>
                <Typography variant="h6" align="center">LETÍCIA</Typography>
                <Typography variant="body2" align="center">@marialeticia11</Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 2 }}>
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: '#F2BE5C',
                      color: '#000',
                      width: '100%',
                      mb: 1,
                    }}
                  >
                    minhas receitas
                  </Button>
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: '#F2BE5C',
                      color: '#000',
                      width: '100%',
                      mb: 1,
                    }}
                  >
                    editar perfil
                  </Button>
                  <Button
                    onClick={handleAddRecipe}
                    variant="contained"
                    sx={{
                      backgroundColor: '#F2BE5C',
                      color: '#FFF',
                      width: '40px',
                      height: '40px',
                      borderRadius: '50%',
                      minWidth: 'unset',
                      mb: 1,
                    }}
                  >
                    +
                  </Button>
                  <Typography variant="body2" align="center" sx={{ mt: 2 }}>
                    0 Receitas
                  </Typography>
                </Box>
              </Box>
            )}

            <Menu
              sx={{ mt: '45px' }}
              id="menu-categories"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={categoriesOpen}
              onClose={handleCloseNavMenu}
            >
              <Box sx={{
                padding: '16px',
                minWidth: '200px',
                backgroundColor: '#F2BE5C',
                boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
                borderRadius: '8px',
              }}>
                <MenuItem onClick={handleCloseNavMenu}>Airfryer</MenuItem>
                <MenuItem onClick={handleCloseNavMenu}>Drinks e bebidas</MenuItem>
                <MenuItem onClick={handleCloseNavMenu}>Doces e sobremesas</MenuItem>
                <MenuItem onClick={handleCloseNavMenu}>Geleias</MenuItem>
                <MenuItem onClick={handleCloseNavMenu}>Molhos</MenuItem>
                <MenuItem onClick={handleCloseNavMenu}>Saladas</MenuItem>
                <MenuItem onClick={handleCloseNavMenu}>Tortas e bolos</MenuItem>
              </Box>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default NavBaL;
