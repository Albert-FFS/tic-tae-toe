import "./modal.css";
type modalArgs = {
  winner:string,
  restart?:any
}
export default function Modal(args:modalArgs){
  return(
    <div className="modal">
      <h3>El "{args.winner}" a Ganado la Partida</h3>
      <fieldset>
        <legend>Deseas Jugar una Nueva Partida ?</legend>
        <button onClick={args.restart}>Partida Nueva</button>
      </fieldset>
    </div>
  )
}