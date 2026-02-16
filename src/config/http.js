import axios from "axios";

export const moviesApi = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
    headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MDYyZWViZjZlNDRjYzJkOGRiNGIzZDA1NDkzZTc4OSIsIm5iZiI6MTc2MDIyNDc5OC41NzYsInN1YiI6IjY4ZWFlNjFlNGZmYmNiN2U0MjlmZGFkMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.c3fy_Fyh1wsqy67_U66Cm_igaa3oboHWgqZuRfpl8nw`
    }
});

