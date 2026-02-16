import { useMovies } from '../../hooks/useMovies';
import styles from './movies.module.css';
import { Link } from "react-router-dom";


export function Movies() {
  const { movies, loading, error } = useMovies();

  if (loading) return <p>Carregando filmes...</p>;
  if (error) return <p>Erro ao carregar filmes: {error.message}</p>;

return (
  <section className={styles.movies}>
    <h1>Filmes Populares</h1>
    <div className={styles.movieList}>
      {movies.map((movie) => {
        const imageUrl = movie.poster_path
          ? `https://image.tmdb.org/t/p/w200/${movie.poster_path}`
          : 'https://via.placeholder.com/200x300?text=Sem+Imagem';

        return (
          <div key={movie.id} className={styles.movie}>
            <img src={imageUrl} alt={movie.title} />
            <strong>{movie.title}</strong><br /> ({movie.release_date})<br />
            
          <div>
            <Link to={`/movies/${movie.id}`}>Ver detalhes</Link>
          </div>
        </div>
        );
      })}
    </div>
  </section>  
  );
}

export default Movies;

