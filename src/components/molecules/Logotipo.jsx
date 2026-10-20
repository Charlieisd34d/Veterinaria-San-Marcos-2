import Icono from "../atoms/Icono";

function Logotipo(props) {
  return (
    <div className="d-flex align-items-center gap-2">
      <div
        className="rounded-circle bg-success text-white d-flex align-items-center justify-content-center"
        style={{ width: "40px", height: "40px" }}
      >
        <Icono clase={props.claseIcono} />
      </div>
      <div>
        <h1 className="h5 mb-0 fw-bold text-dark lh-1">{props.titulo}</h1>
        <small
          className="text-muted fw-semibold text-uppercase"
          style={{ fontSize: "0.65rem", letterSpacing: "1px" }}
        >
          {props.subtitulo}
        </small>
      </div>
    </div>
  );
}

export default Logotipo;