import { Box. useTheme } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import uiConfigs from "../../configs/ui.configs";

const Banner = () => {
  const [data, setData] = useState([]);
  const movie = data[Math.floor(Math.random() * data.length - 1)];
  useEffect(() => {
    const url = "https://academics.newtonschool.co/api/v1/ott/show";
    const config = {
      headers: { projectId: "exn9j6ivl5cz" },
    };
    axios.get(url, config).then((res) => setData(res.data.data));
  }, []);
  return (
    // <>
    //   <div className="w-full h-[550px] text-white">
    //     <div className="w-full h-full">
    //       <img
    //         className="w-full h-full object-cover"
    //         src={movie?.thumbnail}
    //         alt={movie?.title}
    //       />
    //     </div>
    //   </div>
    // </>
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
        <Swiper
          grabCursor={true}
          loop={true}
          // modules={[Autoplay]}
          style={{ width: "100%", height: "max-content" }}
          // autoplay={{
          //   delay: 3000,
          //   disableOnInteraction: false
          // }}
        >
          {movies.map((movie, index) => (
            <SwiperSlide key={index}>
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
                  backgroundImage: `url(${tmdbConfigs.backdropPath(
                    movie.backdrop_path || movie.poster_path
                  )})`,
                }}
              />
              <Box
                sx={{
                  width: "100%",
                  height: "100%",
                  position: "absolute",
                  top: 0,
                  left: 0,
                  ...uiConfigs.style.horizontalGradientBgImage[
                    theme.palette.mode
                  ],
                }}
              />
              <Box
                sx={{
                  width: "100%",
                  height: "100%",
                  position: "absolute",
                  top: 0,
                  left: 0,
                  paddingX: { sm: "10px", md: "5rem", lg: "10rem" },
                }}
              >
                <Box
                  sx={{
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    paddingX: "30px",
                    color: "text.primary",
                    width: { sm: "unset", md: "30%", lg: "40%" },
                  }}
                >
                  <Stack spacing={4} direction="column">
                    {/* title */}
                    <Typography
                      variant="h4"
                      fontSize={{ xs: "2rem", md: "2rem", lg: "4rem" }}
                      fontWeight="700"
                      sx={{
                        ...uiConfigs.style.typoLines(2, "left"),
                      }}
                    >
                      {movie.title || movie.name}
                    </Typography>
                    {/* title */}

                    <Stack direction="row" spacing={1} alignItems="center">
                      {/* rating */}
                      <CircularRate value={movie.vote_average} />
                      {/* rating */}

                      <Divider orientation="vertical" />
                      {/* genres */}
                      {[...movie.genre_ids]
                        .splice(0, 2)
                        .map((genreId, index) => (
                          <Chip
                            variant="filled"
                            color="primary"
                            key={index}
                            label={
                              genres.find((e) => e.id === genreId) &&
                              genres.find((e) => e.id === genreId).name
                            }
                          />
                        ))}
                      {/* genres */}
                    </Stack>

                    {/* overview */}
                    <Typography
                      variant="body1"
                      sx={{
                        ...uiConfigs.style.typoLines(3),
                      }}
                    >
                      {movie.overview}
                    </Typography>
                    {/* overview */}

                    {/* buttons */}
                    <Button
                      variant="contained"
                      size="large"
                      startIcon={<PlayArrowIcon />}
                      component={Link}
                      to={routesGen.mediaDetail(mediaType, movie.id)}
                      sx={{ width: "max-content" }}
                    >
                      watch now
                    </Button>
                    {/* buttons */}
                  </Stack>
                </Box>
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </>
  );
};

export default Banner;
