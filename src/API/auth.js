import axios from "axios";
import jwtDecode from "jwt-decode";

const BASE_URL = "https://academics.newtonschool.co/api/v1";
const headers = { projectId: "exn9j6ivl5cz" };

export const signUp = async (name, email, password) => {
  try {
    const signup_url = `${BASE_URL}/user/signup`;
    const data = {
      name: name,
      email: email,
      password: password,
      appType: "ott",
    };
    const response = await axios.post(signup_url, data, { headers });
    if (response.data.status === "success") {
      localStorage.setItem("user", JSON.stringify(response.data));
      const decodeToken = jwtDecode(response.data.token);
      const currTime = Date.now() / 1000;
      if (decodeToken.exp < currTime) {
        throw new Error("Token expired, please login again");
      }
      return response.data;
    } else {
      throw new Error("Sign up failed");
    }
  } catch (error) {
    throw new Error("Sign up failed, User already exists");
  }
};

export const signIn = async (email, password) => {
  try {
    const login_url = `${BASE_URL}/user/login`;
    const data = {
      email: email,
      password: password,
      appType: "ott",
    };
    const response = await axios.post(login_url, data, { headers });
    if (response.data.status === "success") {
      localStorage.setItem("user", JSON.stringify(response.data));
      const decodeToken = jwtDecode(response.data.token);
      const currTime = Date.now() / 1000;
      if (decodeToken.exp < currTime) {
        throw new Error("Token expired, please login again");
      }
      return response.data;
    } else {
      throw new Error("Sign in failed");
    }
  } catch (error) {
    throw new Error("Sign in failed, check credentials");
  }
};
