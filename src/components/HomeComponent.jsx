import { Box, styled } from "@mui/material";
import Carousel from "./Main/Carousel";
import Navbar from "./Main/Navbar";
import { useEffect, useState } from "react";
import axios from "axios";
import Banner from "./Main/Banner";
// import NavbarTailwind from "./Main/NavbarTailwind";

// import { grey } from "@mui/material/colors";

const HomeComponent = () => {
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
        <MainWrapper>
          <Wrapper data={data}>
            <Navbar />
          </Wrapper>
          <Carousel title="Trending Now" />
          <Carousel title="Top 10 Movies" />
          <Carousel title="Top 10 TV Shows" />
        </MainWrapper>
      </>
    );
  };

  const Wrapper = styled(Box)(({ theme, data }) => ({
    backgroundColor: theme.palette.common.black,
    backgroundImage: `url(${
      data[Math.floor(Math.random() * data.length - 1)]?.thumbnail
    })`, // Conditional background image
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center center",
    width: "100%",
    height: "80vh",
  }));

  const MainWrapper = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.common.black,
  }));

  // export default HomeComponent;
//   return (
//     <>
//       <MainWrapper>
//         {/* <NavbarTailwind /> */}
//         <Navbar />
//         {/* <Banner /> */}
//         <Carousel title={"Now Playing"} />
//         <Carousel />
//         <Carousel />
//       </MainWrapper>
//     </>
//   );
// };

// const MainWrapper = styled(Box)(({ theme }) => ({
//   backgroundColor: theme.palette.common.black,
//   height: "100vh",
// }));

export default HomeComponent;
