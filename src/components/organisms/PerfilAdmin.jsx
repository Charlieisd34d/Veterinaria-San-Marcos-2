import TituloSeccion from "../atoms/TituloSeccion";
import FilaDato from "../molecules/FilaDato";

function PerfilAdmin(props) {
  return (
    <section className="mt-5">
      <TituloSeccion texto={props.titulo} />
      <div className="card p-4 shadow-sm">
        {props.datos.map((dato) => (
          <FilaDato key={dato.id} etiqueta={dato.etiqueta} texto={dato.texto} />
        ))}
      </div>
    </section>
  );
}

export default PerfilAdmin;