import axios from "axios";
import { useEffect, useState } from "react";

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
    <>
      <div className="w-full h-[550px] text-white">
        <div className="w-full h-full">
          <img
            className="w-full h-full object-cover"
            src={movie?.thumbnail}
            alt={movie?.title}
          />
        </div>
      </div>
    </>
  );
};

export default Banner;
