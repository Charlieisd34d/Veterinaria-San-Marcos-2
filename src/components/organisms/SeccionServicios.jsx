import TituloPrincipal from "../atoms/TituloPrincipal";
import Parrafo from "../atoms/Parrafo";
import Boton from "../atoms/Boton";
import TarjetaServicio from "../molecules/TarjetaServicio";

function SeccionServicios(props) {
  return (
    <section>
      <div className="mb-4">
        <TituloPrincipal texto={props.titulo} />
        <Parrafo texto={props.descripcion} />
      </div>

      <div className="row g-4">
        {props.servicios.map((servicio) => (
          <div key={servicio.id} className="col-12 col-md-6">
            <TarjetaServicio
              icono={servicio.icono}
              titulo={servicio.titulo}
              descripcion={servicio.descripcion}
              textoBoton={props.textoBotonServicio}
              onSolicitar={() => props.onSolicitar(servicio.id)}
            />
          </div>
        ))}
      </div>

      <div className="mt-4">
        <Boton
          texto={props.botonAgendar.texto}
          variante={props.botonAgendar.variante}
          onClick={props.onClickAgendar}
        />
      </div>
    </section>
  );
}

export default SeccionServicios;