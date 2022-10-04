import React from "react";

import "./hojas-de-estilo/Componentes.css";

export function Proyecto1(props) {
  return (
    <div className="contenedor-proyecto1">
      <img
        className="imagen-proyecto1"
        src={require(`./imagenes/proyecto1-${props.imagen}.png`)}
        alt="Imagen reciclaje con papel"
      />

      <div className="contenedor-texto-proyecto1">
        <p className="nombre-proyecto1"><strong>{props.nombre}</strong> con {props.tipo} </p>
        <p className="breve-descripcion-del-proyecto1">{props.descripcion}
        </p>
        <p className="texto-proyecto1">
          "{props.contenido}"
        </p>
      </div>
    </div>
  );
}



