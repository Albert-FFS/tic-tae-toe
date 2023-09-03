import { useState } from "react";
import "./mainMenu.css";
type menuArgs = {
  Start?:any
}
const menu= document.querySelector(".mainMenu");
export default function MainMenu(args:menuArgs) {
  
  const [showInformation, setShowInformation] = useState<boolean>(false);
  return (
    <div className="mainMenu">
      <fieldset>
        <legend>Nueva Partida</legend>
        <button>Empezar !</button>
      </fieldset>
      <fieldset>
        <legend>Acerca De</legend>
        <button onClick={() => setShowInformation(!showInformation)}>
          {showInformation ? "Ocultar Informacion" : "Mostrar Informacion."}
        </button>
        <div className="content">
          {showInformation ? (
            <p>
              Este es un Proyecto desarrollado con React JS y TypeScript en
              conjunto para mejorar mi logica al presentar escenarios como:
              <ul>
                <li>Flujo de datos entre Componentes.</li>
                <li>Construccion de una Pagina Dinamica.</li>
                <li>Renderizado de elementos condicionados.</li>
              </ul>
              Lleve alcabo un juego llamado "3 en Raya" con mis conocimentos de
              HTML 5, CSS 3, JavaScript(EcmaScript 6), React JS 18 & TypeScript
              5.1
            </p>
          ) : (
            ""
          )}
        </div>
      </fieldset>
    </div>
  );
}
