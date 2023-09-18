// import Image from "next/image";
// eslint-disable-next-line no-unused-vars

import {
  AppBar,
  Box,
  Button,
  Grid,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import { grey } from "@mui/material/colors";
import { Link, useNavigate } from "react-router-dom";
import MyImage from "../MyImages";

// eslint-disable-next-line react/prop-types
function Navbar() {
  const pages = { mylist: "My List", movies: "Movies", tvshow: "TV Shows" };
  const navigate = useNavigate();

  return (
    <>
      <AppBar
        sx={{
          backgroundColor: grey[900],
          padding: "5px 10px",
          position: "fixed",
        }}
        elevation={0}
      >
        <Toolbar>
          <Grid container alignItems="center" spacing={2}>
            <Grid item xs sx={{ flexGrow: 1, display: { md: "flex" } }}>
              <MyImage
                src="/public/images/netflix-long-logo.svg"
                alt="Netflix Logo"
                style={{
                  width: "110px",
                  height: "auto",
                  marginRight: "10px",
                }}
              />
              <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
                <Stack spacing={2} direction="row">
                  {Object.keys(pages).map((page, index) => (
                    <Button
                      key={index}
                      color="secondary"
                      component={Link}
                      to={page}
                      sx={{
                        my: 2,
                        color: "white",
                        display: "block",
                        paddingLeft: "10px",
                        "&:hover": {
                          bgcolor: "rgb(229, 9, 20)",
                        },
                      }}
                    >
                      {pages[page]}
                    </Button>
                  ))}
                </Stack>
              </Box>
            </Grid>

            <Grid item xs="auto">
              <Typography>Hello</Typography>
            </Grid>
            <Grid item xs="auto">
              <Button
                color="primary"
                variant="contained"
                onClick={() => {
                  localStorage.clear();
                  navigate("/login");
                }}
              >
                Sign out
              </Button>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </>
  );
}


export default Navbar;
