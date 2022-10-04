import './App.css';
import {Proyecto1} from "./Componentes.js";

export function App() {
    return (
        <div className="App">
            <div className='contenedor-principal'>
            <h1>Proyectos Icraft</h1>
            <img className='imagen-App'
             src={require("./logoicraft.png")}
             alt="Logo"
           />


            <Proyecto1 
            imagen='papel'
            nombre='Proyecto de Reciclaje'
            tipo='Papel'
            descripcion='Una de las manualidades que más les gusta a los niños es hacer manualidades con papel. En esta ocasión aprenderemos cómo hacer diferentes tipos de flores con papel crepe.'
            contenido='El papel crepe, también conocido como papel pinocho, es un tipo de papel usado en manualidades, entre otros sectores, y presenta un tacto con cierto aire rugoso, áspero. Puede ser doblado y manipulado con facilidad, pero queda siempre con una forma más o menos rígida. Por este motivo, son súper famosas las flores de papel crepe, esas tan bonitas con formas y volumen.'
            />
            <Proyecto1 
            imagen='plastico'
            nombre='Proyecto de Reciclaje'
            tipo='Plástico'
            descripcion='Con las botellas se pueden crear muchísimas cosas desde macetas, alcancías, contenedores para colores y pinceles, flores etc.'
            contenido='La razón por la que el plástico es nocivo para el medioambiente es por su gran durabilidad. Por tanto, si no lo reciclamos, estamos perdiendo una materia prima perfectamente reutilizable y estamos forzando a la industria a que siga usando materias primas nuevas, de ahí la importancia de reciclar.'
            />
            <Proyecto1
            imagen='vidrio'
            nombre='Proyecto de Reciclaje'
            tipo='Vidrio'
            descripcion='El vidrio, un componente duradero'
            contenido='El vidrio tarda mucho tiempo en degradarse. Se calcula que un envase puede permanecer en la naturaleza unos 4.000 años, por eso es muy importante intentar reciclar vidrio siempre que podamos, no crees.'
            />
            </div>

        </div>
    )
}




