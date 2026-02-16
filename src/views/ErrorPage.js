// src/views/ErrorPage.jsx
import { useRouteError } from "react-router-dom";

export function ErrorPage() {
  const error = useRouteError();
  console.error("Erro de rota:", error);

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Erro na rota</h2>
      <pre style={{ whiteSpace: "pre-wrap", background: "#f5f5f5", padding: "1rem" }}>
        {error?.message || JSON.stringify(error, null, 2)}
      </pre>
    </div>
  );
}
