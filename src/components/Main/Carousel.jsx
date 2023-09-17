import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid,
  IconButton,
  Typography,
  useTheme,
} from "@mui/material";
import { Favorite, PlaylistAdd } from "@mui/icons-material";
import axios from "axios";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
// import { AutoPlay } from "swiper";
import uiConfigs from "../../configs/ui.configs";

export default function Carousel({ title }) {
  const [data, setData] = useState([]);
  const theme = useTheme();

  useEffect(() => {
    const url = "https://academics.newtonschool.co/api/v1/ott/show";
    const config = {
      headers: { projectId: "exn9j6ivl5cz" },
    };
    axios.get(url, config).then((res) => setData(res.data.data));
  }, []);
  return (
    <>
      <Box
        sx={{
          position: "relative",
          color: "primary.contrastText",
          "&::before": {
            content: '""',
            width: "100%",
            height: "30%",
            position: "absolute",
            bottom: 0,
            left: 0,
            zIndex: 2,
            pointerEvents: "none",
            ...uiConfigs.style.gradientBgImage[theme.palette.mode],
          },
        }}
      >
        {/* <Typography variant="h4" sx={{ paddingTop: "20px" }}>
          {title}
        </Typography> */}
        <Grid
          container
          spacing={3}
          sx={{ paddingBottom: "30px", paddingTop: "30px" }}
        >
          <Swiper
            grabCursor={true}
            loop={true}
            // modules={[AutoPlay]}
            style={{ width: "100%", height: "max-content" }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            spaceBetween={5}
            slidesPerView={5}
            //   onSlideChange={() => console.log("slide change")}
            //   onSwiper={(swiper) => console.log(swiper)}
            //   autoplay={{
            //     delay: 5000,
            //     disableOnInteraction: false,
            //   }}
            className="relative md:h-[60vh] h-[50vh]"
          >
            {data.map((movie) => (
              <SwiperSlide key={movie._id}>
                {/* <Grid> */}
                <Box
                  sx={{
                    paddingTop: {
                      xs: "130%",
                      sm: "80%",
                      md: "60%",
                      lg: "45%",
                    },
                    backgroundPosition: "top",
                    backgroundSize: "cover",
                    backgroundImage: `url(${movie.thumbnail})`,
                  }}
                >
                  {/* <CardContent>
                    <Link to={`/movie/${movie.title}`} state={{ movie: movie }}>
                      <Card>
                        <CardMedia
                          component="img"
                          height="400"
                          width="300"
                          image={movie.thumbnail}
                          alt={movie.title}
                          title={movie.title}
                          sx={{
                            position: "cover",
                          }}
                        />
                      </Card>
                    </Link>
                    <IconButton sx={{ bgcolor: "#ffffffff" }} aria-label="like">
                      <Favorite />
                    </IconButton>
                    <IconButton
                      sx={{ bgcolor: "#ffffffff" }}
                      aria-label="add to list"
                    >
                      <PlaylistAdd />
                    </IconButton>
                  </CardContent> */}
                </Box>
                {/* </Grid> */}
              </SwiperSlide>
            ))}
          </Swiper>
        </Grid>
      </Box>
    </>
  );
}

Carousel.propTypes = {
  title: PropTypes.string,
};
