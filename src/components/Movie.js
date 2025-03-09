import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "../Movie.module.css";

const Movies = ({ coverImg, title, summary, genres, id }) => {
  return (
    <div className={styles.movie}>
      <img alt="#" src={coverImg} />
      <h2 className={styles.movie__link}>
        <Link to={`/movie/${id}`}>{title}</Link>
      </h2>
      <ul>
        {genres.map((genre) => (
          <li key={genre}>{genre}</li>
        ))}
      </ul>
    </div>
  );
};

Movies.propTypes = {
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  id: PropTypes.number.isRequired,
};

export default Movies;
