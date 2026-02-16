import { useParams } from "react-router-dom";
import { useMovie } from "../../hooks/useMovies";
import styles from "./MovieDetails.module.css";

export function MoviesDetails() {
  const { id } = useParams();
  const { movie, loading, error } = useMovie(id);

  console.log("MovieDetails - ID:", id, "Movie:", movie, "Loading:", loading, "Error:", error);

  if (loading) return <p>Carregando detalhes do filme...</p>;
  if (error) return <p>Erro ao carregar os dados do filme.</p>;
  if (!movie) return <p>Filme não encontrado.</p>;

  const poster = movie.poster_path
    ? `https://image.tmdb.org/t/p/w200/${movie.poster_path}`
    : null;

  return (
    <section className={styles.movie}>
      <figure className={styles.imageContainer}>
        {poster && <img src={poster} alt={movie.title} />}
      </figure>
      <h1>{movie.title}</h1>
      <p>{movie.overview || "Descrição indisponível."}</p>
    </section>
  );
}

