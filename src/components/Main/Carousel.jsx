import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid,
  IconButton,
  Typography,
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

export default function Carousel({ title }) {
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
      <Typography variant="h4" sx={{ paddingTop: "20px" }}>
        {title}
      </Typography>
      <Grid
        container
        spacing={3}
        sx={{ paddingBottom: "30px", paddingTop: "30px" }}
      >
        <Swiper
          spaceBetween={5}
          slidesPerView={7}
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
              <Grid>
                <Box>
                  <CardContent>
                    <Link to={`/movie/${movie.title}`} state={{ movie: movie }}>
                      <Card>
                        <CardMedia
                          component="img"
                          height="300"
                          width="20"
                          image={movie.thumbnail}
                          alt={movie.title}
                          title={movie.title}
                          sx={{
                            "&:hover": {
                              height: "400",
                              width: "auto",
                            },
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
                  </CardContent>
                </Box>
              </Grid>
            </SwiperSlide>
          ))}
        </Swiper>
      </Grid>
    </>
  );
}

Carousel.propTypes = {
  title: PropTypes.string,
};
