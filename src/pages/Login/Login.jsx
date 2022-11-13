import React, { useState } from "react";
import axios from "axios";
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from "react-router-dom";

import { checkLogin } from "../../redux/features/auth";
// UI imports
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme();

export default function Login() {
  let navigate = useNavigate();
  const login = useSelector((state)=>state.login.value)
  const dispatch = useDispatch()
  const [userId, setUserId] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [wrongCredentials,setWrongCredentials]=useState(true)
  const handleLogin = (e) => {
    e.preventDefault();
    axios
      .post("https://saauti-dev.onrender.com/auth", {
        email: userEmail,
        password: userPassword,
      })
      .then((response) => {
        if(response.data==="Wrong Credentials"){
            return setWrongCredentials(true)
        }
        alert("LoggedIn")
        setWrongCredentials(false)
        setUserId(response);
        dispatch(checkLogin({isLoggedIn:true,userId:5}));
        navigate(-1);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <ThemeProvider  theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Login to Saauti
          </Typography>
          <Box
            component="form"
            onSubmit={handleLogin}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullwidth="true"
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={(e) => setUserEmail(e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullwidth="true"
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={(e) => setUserPassword(e.target.value)}
            />
            <br />
            <Button
              type="submit"
              fullwidth="true"
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

