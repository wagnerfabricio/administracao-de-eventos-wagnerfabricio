import { useState } from "react";
import { useHistory } from "react-router";
import { useDrinks } from "../../providers/Drinks";
import { GiWineBottle } from "react-icons/gi";

//STYLES
import {
  AppBar,
  Button,
  Container,
  Grid,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import MenuIcon from "@mui/icons-material/Menu";

const pages = ["Home", "Formatura", "Casamento", "Confraternização"];

const Header = () => {
  const history = useHistory();
  const { homePage } = useDrinks();

  //mui components
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  //mui components

  const handleCloseNavMenu = (page) => {
    if (page === "Formatura") history.push("/formatura");
    if (page === "Casamento") history.push("/casamento");
    if (page === "Confraternização") history.push("/confraternizacao");
    if (page === "Home") {
      homePage();
      history.push("/");
    }
    setAnchorElNav(null);
  };

  const handleLogo = () => {
    homePage();
    history.push("/");
  };

  return (
    <Grid>
      <AppBar position="static" color="default">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Button
              style={{ textTransform: "none" }}
              sx={{
                mr: 2,
                display: {
                  xs: "none",
                  md: "flex",
                },
              }}
              onClick={handleLogo}
            >
              <Typography
                variant="h4"
                noWrap
                color="secondary"
                component="div"
                sx={{
                  mr: 2,
                  display: {
                    xs: "none",
                    md: "flex",
                    fontFamily: "'Comforter', cursive;",
                  },
                }}
              >
                KenzieDrinks <GiWineBottle />
              </Typography>
            </Button>
            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="secondary"
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
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={() => handleCloseNavMenu(page)}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <Button style={{ textTransform: "none" }} onClick={handleLogo}>
              <Typography
                variant="h6"
                noWrap
                component="div"
                color="secondary"
                sx={{
                  flexGrow: 1,
                  display: {
                    xs: "flex",
                    md: "none",
                    fontFamily: "'Comforter', cursive;",
                  },
                }}
              >
                KenzieDrinks <GiWineBottle />
              </Typography>
            </Button>
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
                justifyContent: "flex-end",
              }}
            >
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={() => handleCloseNavMenu(page)}
                  sx={{ my: 2, display: "block" }}
                  color="secondary"
                >
                  {page}
                </Button>
              ))}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </Grid>
  );
};

export default Header;
