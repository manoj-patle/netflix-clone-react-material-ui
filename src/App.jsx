import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import Loader from "./components/common/Loader";
import { Protected } from "./components/common/Protected";
import MovieDetail from "./components/Main/MovieDetail";

const SignIn = lazy(() => import("./pages/SignIn"));
const Login = lazy(() => import("./pages/Login"));
const Home = lazy(() => import("./pages/Home"));
const Register = lazy(() => import("./pages/Register"));

function App() {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/login" element={<SignIn />} />
          <Route exact path="/register" element={<Register />} />
          <Route
            exact
            path="/home"
            element={
              <Protected>
                <Home />
              </Protected>
            }
          />
          <Route
            exact
            path="/movie/:title"
            element={
              <Protected>
                <MovieDetail />
              </Protected>
            }
          />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
