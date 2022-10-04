import "./Tarjeta.css";

export function TaskCard({ ready }) {
  return (
    <div className="card">
      <h1 style={{ fontWeight: "lighter" }}>Proyectos Craft</h1>
      <span style={ready ? { background: "green" } : { background: "red" }}>
        {ready ? "Proyecto aprobado" : "Proyecto no aprobado"}
      </span>

      <p>Sostenibles</p>
    </div>
  );
}
