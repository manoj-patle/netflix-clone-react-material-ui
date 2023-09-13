import { useState, useEffect } from "react";

import "./Banner.css";
import axios from "axios";

function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    const url = "https://academics.newtonschool.co/api/v1/ott/show";
    const config = {
      headers: { projectId: "exn9j6ivl5cz" },
    };
    axios
      .get(url, config)
      .then((res) =>
        setMovie(res.data.data[Math.random() * res.data.data.length - 1])
      );
  }, []);

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(${movie?.thumbnail})`,
        backdropPosition: "center center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Background image */}
      <div className="banner_contents">
        {/* title */}
        <h1 className="banner_title">{movie?.title}</h1>

        {/* 2 buttons */}
        <div className="banner_buttons">
          <button className="banner_button">Play</button>
          <button className="banner_button">My List </button>
        </div>

        {/* description */}
        <h1 className="banner_description">{truncate(movie?.title, 200)}</h1>
      </div>
      <div className="banner_fadeBottom" />
    </header>
  );
}

export default Banner;
