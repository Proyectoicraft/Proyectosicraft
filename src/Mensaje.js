export function Mensaje({title, name = "User"}) {
  console.log(title, name);
  return (
    <div>
      <h1>{title}, Empresa {name}</h1>
      <p>Materia prima materiales reciclables</p>
    </div>
  );
}
export function Proyecto() {
  return (
    <div>
      <h1>Otros Proyectos</h1>
    </div>
  );
}
export function Navbar() {
  return <nav>Barra de Navegacion</nav>;
}
