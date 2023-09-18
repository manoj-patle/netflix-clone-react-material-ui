import { useLocation } from "react-router-dom";

function MovieDetail() {
  const location = useLocation();
  const { title } = location.state.movie;
  document.title = title;
  return <div style={{ color: "red" }}>{title}</div>;
}

export default MovieDetail;
