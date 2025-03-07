import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function Detail() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [detail, setDetail] = useState([]);
  const movieDetail = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setDetail(json.data.movie);
    setLoading(false);
  };
  useEffect(() => {
    movieDetail();
  }, []);
  return (
    <div>
      <img alt={detail.title} src={detail.medium_cover_image} />
      <Link to={detail.url}>
        <h1>{detail.title}</h1>
      </Link>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <div>
            <span>Year: {detail.year}</span>
          </div>
          <div>
            <span>Rating: {detail.rating}</span>
          </div>
          <div>
            <span>Runtime: {detail.runtime}</span>
          </div>
        </div>
      )}
    </div>
  );
}

export default Detail;
