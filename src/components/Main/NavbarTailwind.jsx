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
function NavbarTailwind() {
  const pages = ["My List", "Movies", "TV Shows"];
  const [anchorEl, setAnchorEl] = useState(null);
  const navigate = useNavigate();

  const handleCloseNavMenu = () => {};
  const [data, setData] = useState([]);

  useEffect(() => {
    const pages = ["My List", "Movies", "TV Shows"];
    const url = "https://academics.newtonschool.co/api/v1/ott/show";
    const config = {
      headers: { projectId: "exn9j6ivl5cz" },
    };
    axios.get(url, config).then((res) => setData(res.data.data));
  }, []);

  const handleSignOut = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <>
      {/* <AppBar
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
      </AppBar> */}
      <div className="flex items-center p-4 z-[100] my-2 justify-between w-full absolute">
        <div className="flex items-center">
          <img
            src="/images/netflix-long-logo.svg"
            alt="Netflix Logo"
            style={{
              width: "120px",
              height: "auto",
              marginRight: "20px",
            }}
          />
          {pages.map((page) => (
            <Button
              size="small"
              key={page}
              onClick={handleCloseNavMenu}
              sx={{ color: "white" }}
            >
              {page}
            </Button>
          ))}
        </div>
        <div>
          <Button
            color="primary"
            variant="contained"
            onClick={handleSignOut}
            sx={{ height: "30px" }}
          >
            Sign out
          </Button>
        </div>
      </div>
    </>
  );
}

export default NavbarTailwind;
