import { Link } from "react-router-dom";

export function Header() {
  return (
    <header style={{ padding: "1rem", backgroundColor: "#222", color: "#fff" }}>
      <h1>🎬 Aplicação de Filmes</h1>
      <nav>
        <ul style={{ listStyle: "none", display: "flex", gap: "1rem", padding: 0 }}>
          <li><Link to="/" style={{ color: "#fff", textDecoration: "none" }}>Home</Link></li>
          <li><Link to="/movies" style={{ color: "#fff", textDecoration: "none" }}>Movies</Link></li>
        </ul>
      </nav>
    </header>
  );
}

