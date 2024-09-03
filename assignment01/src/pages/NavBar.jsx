import AdbIcon from "@mui/icons-material/Adb";
import MenuIcon from "@mui/icons-material/Menu";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Toolbar from "@mui/material/Toolbar";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import React from "react";

import Logo from "../../Wheels/TP-logo.webp";

const pages = [
  "Car Tyres",
  "Bike Tyres",
  "Tyre Pressure",
  "Commercial Tyres",
  "Accessories",
  "More",
];

const settings = ["Profile", "Account", "Dashboard", "Logout"];

export const NavBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <img src={Logo} alt="tyreplex" />

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
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
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{ display: { xs: "block", md: "none" } }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography sx={{ textAlign: "center" }}>{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
            <Typography
              variant="h5"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              LOGO
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Button
                      id="basic-button"
                      aria-controls={open ? "basic-menu" : undefined}
                      aria-haspopup="true"
                      aria-expanded={open ? "true" : undefined}
                      onClick={handleClick}
                      sx={{
                        my: 2,
                        color: "white",
                        fontWeight: "600",
                        display: "block",
                      }}
                    >
                      Car Tyres
                    </Button>
                    <Menu
                      id="basic-menu"
                      anchorEl={anchorEl}
                      open={open}
                      onClose={handleClose}
                      MenuListProps={{
                        "aria-labelledby": "basic-button",
                      }}
                    >
                      <MenuItem onClick={handleClose}>
                        Popular Car Tyre Brands
                      </MenuItem>
                      <MenuItem onClick={handleClose}>MRF Tyres</MenuItem>
                      <MenuItem onClick={handleClose}>CEAT Tyres</MenuItem>
                      <MenuItem onClick={handleClose}>Goodyear Tyres</MenuItem>
                      <MenuItem onClick={handleClose}>Apollo Tyres</MenuItem>
                      <MenuItem onClick={handleClose}>
                        Bridgestone Tyres
                      </MenuItem>
                      <MenuItem onClick={handleClose}>JK Tyres</MenuItem>
                      <MenuItem onClick={handleClose}>Michelin Tyres</MenuItem>
                      <MenuItem onClick={handleClose}>All car Tyres</MenuItem>
                    </Menu>
                  </IconButton>
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Button
                      id="basic-button"
                      aria-controls={open ? "basic-menu" : undefined}
                      aria-haspopup="true"
                      aria-expanded={open ? "true" : undefined}
                      onClick={handleClick}
                      sx={{
                        my: 2,
                        color: "white",
                        fontWeight: "600",
                        display: "block",
                      }}
                    >
                      Bike Tyres
                    </Button>
                    <Menu
                      id="basic-menu"
                      anchorEl={anchorEl}
                      open={open}
                      onClose={handleClose}
                      MenuListProps={{
                        "aria-labelledby": "basic-button",
                      }}
                    >
                      <MenuItem onClick={handleClose}>
                        Popular Bike Tyre Brands
                      </MenuItem>
                      <MenuItem onClick={handleClose}>MRF Tyres</MenuItem>
                      <MenuItem onClick={handleClose}>CEAT Tyres</MenuItem>
                      <MenuItem onClick={handleClose}>Goodyear Tyres</MenuItem>
                      <MenuItem onClick={handleClose}>Apollo Tyres</MenuItem>
                      <MenuItem onClick={handleClose}>
                        Bridgestone Tyres
                      </MenuItem>
                      <MenuItem onClick={handleClose}>JK Tyres</MenuItem>
                      <MenuItem onClick={handleClose}>Michelin Tyres</MenuItem>
                      <MenuItem onClick={handleClose}>All Bike Tyres</MenuItem>
                    </Menu>
                  </IconButton>

                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Button
                      id="basic-button"
                      aria-controls={open ? "basic-menu" : undefined}
                      aria-haspopup="true"
                      aria-expanded={open ? "true" : undefined}
                      onClick={handleClick}
                      sx={{
                        my: 2,
                        color: "white",
                        fontWeight: "600",
                        display: "block",
                      }}
                    >
                      Tyre Pressure
                    </Button>
                  </IconButton>

                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Button
                      id="basic-button"
                      aria-controls={open ? "basic-menu" : undefined}
                      aria-haspopup="true"
                      aria-expanded={open ? "true" : undefined}
                      onClick={handleClick}
                      sx={{
                        my: 2,
                        color: "white",
                        fontWeight: "600",
                        display: "block",
                      }}
                    >
                      Commercial Tyres
                    </Button>
                    <Menu
                      id="basic-menu"
                      anchorEl={anchorEl}
                      open={open}
                      onClose={handleClose}
                      MenuListProps={{
                        "aria-labelledby": "basic-button",
                      }}
                    >
                      <MenuItem onClick={handleClose}>
                        All Commercial Tyres
                      </MenuItem>
                    </Menu>
                  </IconButton>

                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Button
                      id="basic-button"
                      aria-controls={open ? "basic-menu" : undefined}
                      aria-haspopup="true"
                      aria-expanded={open ? "true" : undefined}
                      onClick={handleClick}
                      sx={{
                        my: 2,
                        color: "white",
                        fontWeight: "600",
                        display: "block",
                      }}
                    >
                      Accessories
                    </Button>
                    <Menu
                      id="basic-menu"
                      anchorEl={anchorEl}
                      open={open}
                      onClose={handleClose}
                      MenuListProps={{
                        "aria-labelledby": "basic-button",
                      }}
                    >
                      <MenuItem onClick={handleClose}>Accessories</MenuItem>
                      <MenuItem onClick={handleClose}>Batteries</MenuItem>
                      <MenuItem onClick={handleClose}>Alloys Wheels</MenuItem>
                    </Menu>
                  </IconButton>

                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Button
                      id="basic-button"
                      aria-controls={open ? "basic-menu" : undefined}
                      aria-haspopup="true"
                      aria-expanded={open ? "true" : undefined}
                      onClick={handleClick}
                      sx={{
                        my: 2,
                        color: "white",
                        fontWeight: "600",
                        display: "block",
                      }}
                    >
                      More
                    </Button>
                    <Menu
                      id="basic-menu"
                      anchorEl={anchorEl}
                      open={open}
                      onClose={handleClose}
                      MenuListProps={{
                        "aria-labelledby": "basic-button",
                      }}
                    >
                      <MenuItem onClick={handleClose}>CashBack Offer</MenuItem>
                      <MenuItem onClick={handleClose}>
                        Find Tyre Dealers
                      </MenuItem>
                      <MenuItem onClick={handleClose}>Compare Tyres</MenuItem>
                      <MenuItem onClick={handleClose}>
                        Are you a Tyre Dealer
                      </MenuItem>
                      <MenuItem onClick={handleClose}>Wheel balancing</MenuItem>
                      <MenuItem onClick={handleClose}>Wheel Alignment</MenuItem>
                    </Menu>
                  </IconButton>
                </Tooltip>
              </Box>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};
