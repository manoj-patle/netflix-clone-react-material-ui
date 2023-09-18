// import Image from "next/image";

import {
  AppBar,
  Box,
  Button,
  Container,
  Grid,
  MenuItem,
  Select,
  TextField,
  Toolbar,
  Typography,
  styled,
} from "@mui/material";
import MyImage from "./MyImages";
// eslint-disable-next-line no-unused-vars
import { common, grey } from "@mui/material/colors";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

// eslint-disable-next-line react/prop-types
function LoginComponent() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  return (
    <>
      <Wrapper>
        <AppBar
          sx={{
            backgroundColor: "transparent",
            padding: "25px 20px",
            position: "absolute",
          }}
          elevation={0}
        >
          <Toolbar>
            <Grid container alignItems="center" spacing={2}>
              <Grid item xs>
                <MyImage
                  src="/public/images/netflix-long-logo.svg"
                  alt="Netflix Logo"
                  style={{
                    width: "167px",
                    height: "auto",
                    objectFit: "cover",
                  }}
                />
              </Grid>
              <Grid item xs="auto">
                <Select
                  name="lang"
                  variant="outlined"
                  size="small"
                  defaultValue="EN"
                  sx={{
                    borderWidth: "2px",
                    borderStyle: "solid",
                    borderColor: "common.white",
                    color: "common.white",
                    "& .MuiSelect-icon": {
                      color: "common.white",
                    },
                    "& .MuiOutlinedInput-notchedOutline": {
                      border: "none",
                    },
                  }}
                >
                  <MenuItem value="HI">हिन्दी</MenuItem>
                  <MenuItem value="EN">English</MenuItem>
                </Select>
              </Grid>
              <Grid item xs="auto">
                <Button
                  color="primary"
                  variant="contained"
                  onClick={() => navigate("/login")}
                >
                  Sign in
                </Button>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>

        <Box
          sx={{
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100vh",
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
              sx={{
                my: 3,
              }}
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
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Grid>
                <Grid item xs="auto">
                  <Link to={"/register"} state={{ email: email }}>
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
                    >
                      Get Started
                    </Button>
                  </Link>
                </Grid>
              </Grid>
            </Container>
          </Container>
        </Box>
      </Wrapper>
    </>
  );
}

const Wrapper = styled(Box)(({ theme }) => ({
  backgroundImage: 'url("/images/large_login_image.jpg")',
  backgroundColor: theme.palette.common.black,
  borderBottom: `8px solid ${grey[900]}`,
  height: "100vh",
}));

export default LoginComponent;
