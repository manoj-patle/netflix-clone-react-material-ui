/* eslint-disable react/prop-types */
import {
  AppBar,
  Box,
  Button,
  FormControl,
  Grid,
  InputAdornment,
  TextField,
  Typography,
  styled,
} from "@mui/material";
import { useEffect, useState } from "react";
import MyImage from "./MyImages";
import { useLocation, useNavigate } from "react-router-dom";
import { signUp } from "../API/auth";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  height: "75%",
  backgroundColor: "rgba(0,0,0,0.9)",
  boxShadow: 24,
  borderRadius: "5px",
  p: 4,
  zIndex: 99999,
};

export default function RegisterComponent() {
  const location = useLocation();
  const [showPassword, setShowPassword] = useState(false);
  const [userDetails, setUserDetails] = useState({
    email: location.state.email,
  });
  const [errMsg, setErrMsg] = useState("");
  const navigate = useNavigate();

  const handleRegister = async () => {
    try {
      await signUp(userDetails.name, userDetails.email, userDetails.password);
      navigate("/login");
    } catch (err) {
      console.error(err);
      if (!userDetails.name) {
        setErrMsg("Please Enter Username");
      } else if (!userDetails.email) {
        setErrMsg("Please Enter Email");
      } else if (!userDetails.password) {
        setErrMsg("Please Enter Password");
      } else {
        setErrMsg("Sign up failed, User already exists");
      }
    }
  };
  useEffect(() => {
    setErrMsg("");
  }, [userDetails.name, userDetails.email, userDetails.password]);

  return (
    <Wrapper>
      <AppBar
        sx={{
          backgroundColor: "transparent",
          padding: "32px 43px",
          position: "absolute",
        }}
        elevation={0}
      >
        <MyImage
          src="/public/images/netflix-long-logo.svg"
          alt="Netflix Logo"
          style={{
            width: "167px",
            height: "auto",

            //   objectFit: "cover",
          }}
        />
      </AppBar>
      <Box sx={style}>
        <Typography variant="p" component="p" sx={{ mb: 4 }}>
          {errMsg}
        </Typography>
        <Typography variant="h4" component="h1" sx={{ mb: 4 }}>
          Sign Up
        </Typography>
        <Grid sx={{ mb: 2 }}>
          <form>
            <FormControl sx={{ mb: 3 }} fullWidth>
              <TextField
                id="name"
                name="name"
                label="Username"
                variant="filled"
                onChange={(e) =>
                  setUserDetails({ ...userDetails, name: e.target.value })
                }
                fullWidth
                InputLabelProps={{
                  style: {
                    color: "rgba(139, 139, 139, 0.603)",
                  },
                }}
                sx={{
                  borderRadius: "5px",
                  bgcolor: "#333",
                }}
              />
            </FormControl>
            <FormControl sx={{ mb: 3 }} fullWidth>
              <TextField
                id="email"
                name="email"
                label="Email"
                variant="filled"
                value={userDetails.email}
                onChange={(e) =>
                  setUserDetails({ ...userDetails, email: e.target.value })
                }
                fullWidth
                InputLabelProps={{
                  style: {
                    color: "rgba(139, 139, 139, 0.603)",
                  },
                }}
                sx={{
                  borderRadius: "5px",
                  bgcolor: "#333",
                }}
              />
            </FormControl>
            <FormControl sx={{ mb: 6 }} fullWidth>
              <TextField
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                label="Password"
                variant="filled"
                autoComplete="off"
                onChange={(e) =>
                  setUserDetails({ ...userDetails, password: e.target.value })
                }
                InputLabelProps={{
                  style: {
                    color: "rgba(139, 139, 139, 0.603)",
                  },
                }}
                sx={{
                  borderRadius: "5px",
                  bgcolor: "#333",
                }}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      {userDetails.password && (
                        <Button onClick={() => setShowPassword(!showPassword)}>
                          {showPassword ? "Hide" : "Show"}
                        </Button>
                      )}
                    </InputAdornment>
                  ),
                  autoComplete: "off",
                }}
              />
            </FormControl>
          </form>
          <Button
            type="submit"
            variant="contained"
            size="large"
            fullWidth
            sx={{ textTransform: "none" }}
            onClick={() => handleRegister()}
          >
            Sign Up
          </Button>
        </Grid>

        <Grid>
          <Typography
            variant="body1"
            component="span"
            sx={{ color: "rgba(164, 164, 164, 0.5)" }}
          >
            Already have an account?
          </Typography>
          <Typography
            variant="body1"
            color="primary"
            component="a"
            onClick={() => navigate("/login")}
            lineHeight={3}
            sx={{
              color: "#ffffff",
              "&:hover": {
                textDecoration: "underline",
                cursor: "pointer",
              },
            }}
          >
            &nbsp;Sign In.
          </Typography>
        </Grid>
      </Box>
    </Wrapper>
  );
}
// eslint-disable-next-line no-unused-vars
const Wrapper = styled(Box)(({ theme }) => ({
  backgroundImage: 'url("/public/images/signin-pg-bg.jpg")',
  height: "100vh",
  "&::after": {
    background: "rgba(0, 0, 0, 0.4)",
    backgroundImage: `linear-gradient(
        to bottom,
        rgba(0, 0, 0, 0.6) 0,
        rgba(0, 0, 0, 0) 60%,
        rgba(0, 0, 0, 0.8) 100%
      )`,
    position: "absolute",
    content: '""',
    width: "100%",
    height: "100vh",
    top: 0,
    left: 0,
    pointerEvents: "none",
  },
}));

// const Wrapper = styled.div`
//   background-image: url("/public/images/large_login_image.jpg");
//   height: 100vh;

//   &::after {
//     background: rgba(0, 0, 0, 0.4);
//     position: absolute;
//     content: "";
//     width: 100%;
//     height: 100vh;
//     top: 0;
//     left: 0;
//     pointer-events: none; /* Add this line */
//   }
// `;
