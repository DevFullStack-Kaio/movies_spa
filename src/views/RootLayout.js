import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";

export function RootLayout() {
  return (
    <div>
      <Header />
      <main style={{ padding: "1rem" }}>
        <Outlet /> {/* Aqui os filhos (Home, Movies, MoviesDetails) serão renderizados */}
      </main>
    </div>
  );
}

