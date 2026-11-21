
import TituloSeccion from "../atoms/TituloSeccion";
import Parrafo from "../atoms/Parrafo";
import Boton from "../atoms/Boton";
import FilaDato from "../molecules/FilaDato";

function ComprobanteSolicitud(props) {
  if (!props.solicitud) {
    return (
      <section>
        <TituloSeccion texto={props.textos.titulo} />
        <Parrafo texto={props.textos.noEncontrada} />
        <Boton texto={props.textos.volver} variante="outline-secondary" onClick={props.onVolver} />
      </section>
    );
  }

  return (
    <section>
      <TituloSeccion texto={props.textos.titulo} />
      <div className="card p-4 shadow-sm mb-3">
        <h3 className="h5 mb-3">{`${props.textos.numero} ${props.solicitud.id}`}</h3>
        <FilaDato etiqueta={props.textos.cliente} texto={props.solicitud.cliente} />
        <FilaDato etiqueta={props.textos.servicio} texto={props.solicitud.servicio} />
        <FilaDato etiqueta={props.textos.fecha} texto={props.solicitud.fecha} />
        <FilaDato etiqueta={props.textos.estado} texto={props.solicitud.estado} />
      </div>
      <Boton texto={props.textos.volver} variante="outline-secondary" onClick={props.onVolver} />
    </section>
  );
}

export default ComprobanteSolicitud;