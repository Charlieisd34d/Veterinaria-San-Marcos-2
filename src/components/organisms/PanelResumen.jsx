// src/components/organisms/PanelResumen.jsx
import TituloSeccion from "../atoms/TituloSeccion";
import Parrafo from "../atoms/Parrafo";
import TarjetaResumen from "../molecules/TarjetaResumen";

function PanelResumen(props) {
  return (
    <section>
      <TituloSeccion texto={props.titulo} />
      <Parrafo texto={props.descripcion} />

      <div className="row g-4">
        {props.tarjetas.map((tarjeta) => (
          <div key={tarjeta.id} className="col-12 col-md-4">
            <TarjetaResumen
              icono={tarjeta.icono}
              titulo={tarjeta.titulo}
              valor={props.totales[tarjeta.clave]}
              textoIr={tarjeta.enlace ? props.textoIr : ""}
              onIr={() => props.onIr(tarjeta.enlace)}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default PanelResumen;