import { useEffect, useState } from "react";
import { getMovie, getPopularMovies } from '../services/movies';

// hook para lista de filmes populares
export function useMovies() {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchMovie() {
            try {
                const response = await getPopularMovies();
                setMovies(response.data.results); // TMDb retorna os filmes em 'results'
            } catch (error) {
                setError(error);
                console.error("Erro ao buscar filmes:", error);
            } finally {
                setLoading(false);
            }
        }

        fetchMovie();
    }, []);
  
    return { movies, loading, error };
}

// hook para detalhes de um filme específico
export function useMovie(movieId) {
    const [movie, setMovie] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchMovie() {
            try {
                const response = await getMovie(movieId);
                setMovie(response.data); // objeto do filme, não precisa de results
            } catch (error) {
                setError(error);
                console.error("Não foi possível carregar o filme:", error);
            } finally {
                setLoading(false);
            }
        }

        if (movieId) fetchMovie();
    }, [movieId]);
  
    return { movie, loading, error };
}
