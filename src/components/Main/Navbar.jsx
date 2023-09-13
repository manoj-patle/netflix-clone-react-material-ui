// import Image from "next/image";
// eslint-disable-next-line no-unused-vars

import {
  AppBar,
  Avatar,
  Box,
  Button,
  Grid,
  MenuItem,
  Popover,
  Select,
  TextField,
  Toolbar,
  Typography,
  styled,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { common, grey } from "@mui/material/colors";
import { useNavigate } from "react-router-dom";
import MyImage from "../MyImages";
import axios from "axios";

// eslint-disable-next-line react/prop-types
function Navbar() {
  const pages = ["My List", "Movies", "TV Shows"];
  const [anchorEl, setAnchorEl] = useState(null);
  const navigate = useNavigate();

  const handleCloseNavMenu = () => {};
  const [data, setData] = useState([]);

  useEffect(() => {
    const url = "https://academics.newtonschool.co/api/v1/ott/show";
    const config = {
      headers: { projectId: "exn9j6ivl5cz" },
    };
    axios.get(url, config).then((res) => setData(res.data.data));
  }, []);
  return (
    <>
      {/* <Wrapper> */}
      <AppBar
        sx={{
          backgroundColor: grey[900],
          padding: "5px 20px",
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
                  width: "120px",
                  height: "auto",
                  marginRight: "10px",
                }}
              />
              <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
                {pages.map((page) => (
                  <Button
                    key={page}
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: "white", display: "block" }}
                  >
                    {page}
                  </Button>
                ))}
              </Box>
            </Grid>

            <Grid item xs="auto">
              <Typography>Hello</Typography>
            </Grid>
            <Grid item xs="auto">
              <Button
                color="primary"
                variant="contained"
                onClick={() => navigate("/login")}
              >
                Sign out
              </Button>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>

      {/* 
        <Box
          sx={{
            position: "relative",
            height: "745px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            "&::after": {
              position: "absolute",
              content: '""',
              width: "100%",
              height: "100%",
              top: 0,
              left: 0,
              background: "rgba(0, 0, 0, 0.4)",
              backgroundImage: `linear-gradient(
                to bottom,
                rgba(0, 0, 0, 0.6) 0,
                rgba(0, 0, 0, 0) 60%,
                rgba(0, 0, 0, 0.8) 100%
              )`,
            },
          }}
        >
          <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1000 }}>
            <Typography
              variant="h2"
              component="h1"
              color="common.white"
              fontWeight="600"
              textAlign="center"
            >
              The biggest Indian hits. Ready to watch here from ₹ 149.
            </Typography>
            <Typography
              variant="h5"
              component="p"
              color="common.white"
              textAlign="center"
              gutterBottom
            >
              Join today. Cancel anytime.
            </Typography>
            <Typography
              variant="h6"
              component="p"
              color="common.white"
              textAlign="center"
              sx={{ my: 3 }}
            >
              Ready to watch? Enter your email to create or restart your
              membership.
            </Typography>
            <Container maxWidth="sm">
              <Grid container spacing={1}>
                <Grid item xs>
                  <TextField
                    variant="filled"
                    label="Email address"
                    id="outlined-basic"
                    fullWidth
                    InputLabelProps={{
                      style: {
                        color: "rgba(251, 251, 251, 0.793)", // Set your desired label color here
                      },
                    }}
                    sx={{
                      height: "99%",
                      borderRadius: "3px",
                      // bgcolor: "common.white",
                      borderWidth: "1px",
                      borderStyle: "solid",
                      borderColor: grey[500],
                      bgcolor: "rgba(0, 0, 0, 0.4)",
                    }}
                  />
                </Grid>
                <Grid item xs="auto">
                  <Button
                    variant="contained"
                    size="large"
                    color="primary"
                    sx={{
                      height: "100%",
                      borderRadius: "3px",
                      textTransform: "none",
                      fontSize: "22px",
                    }}
                    onClick={() => navigate("/register")}
                  >
                    Get Started
                  </Button>
                </Grid>
              </Grid>
            </Container>
          </Container>
        </Box> */}
      {/* </Wrapper> */}
    </>
  );
}

export default Navbar;
