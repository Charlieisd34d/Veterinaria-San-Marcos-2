import IconoTexto from "../atoms/IconoTexto";
import TextoDerechosAutor from "../atoms/TextoDerechosAutor";

function PiePagina(props) {
  return (
    <footer className="bg-dark text-white py-4 mt-auto">
      <div className="container-fluid d-flex justify-content-between align-items-center">
        <div>
          <h6 className="mb-0 fw-bold">{props.nombre}</h6>
          <small className="text-white-50">{props.descripcion}</small>
        </div>
        <div className="d-flex gap-4 text-white-50">
          {props.contactos.map((contacto) => (
            <IconoTexto
              key={contacto.id}
              claseIcono={contacto.claseIcono}
              texto={contacto.texto}
            />
          ))}
        </div>
        <TextoDerechosAutor texto={props.textoDerechos} />
      </div>
    </footer>
  );
}

export default PiePagina;