import BarraSuperior from '../organisms/BarraSuperior';
import NavBar from '../organisms/NavBar';
import Footer from '../organisms/Footer';
import TituloPrincipal from '../atoms/TituloPrincipal';
import Parrafo from '../atoms/Parrafo';
import Boton from '../atoms/Boton';
import Imagen from '../atoms/Imagen';
import EtiquetaSeccion from '../atoms/EtiquetaSeccion';

const PlantillaInicio = ({
  datosBarraSuperior,
  datosNavBar,
  datosSeccionPrincipal,
  datosFooter
}) => {
  return (
    <div className="d-flex flex-column min-vh-100">

      <BarraSuperior {...datosBarraSuperior} />

      <NavBar {...datosNavBar} />

      <main className="flex-grow-1 py-5">
        <div className="container">
          <section className="row align-items-center g-4">

            <div className="col-lg-6">
              {datosSeccionPrincipal.etiqueta && (
                <EtiquetaSeccion texto={datosSeccionPrincipal.etiqueta} />
              )}

              <TituloPrincipal texto={datosSeccionPrincipal.titulo} />

              <Parrafo texto={datosSeccionPrincipal.descripcion} />

              <div className="d-flex gap-3 mt-4">
                <Boton
                  etiqueta={datosSeccionPrincipal.etiquetaBotonPrimario}
                  variante="success"
                  alHacerClic={datosSeccionPrincipal.alHacerClicPrimario}
                />

                {datosSeccionPrincipal.etiquetaBotonSecundario && (
                  <Boton
                    etiqueta={datosSeccionPrincipal.etiquetaBotonSecundario}
                    variante="outline-success"
                    alHacerClic={datosSeccionPrincipal.alHacerClicSecundario}
                  />
                )}
              </div>
            </div>

            <div className="col-lg-6 text-center">
              <Imagen
                ruta={datosSeccionPrincipal.rutaImagen}
                textoAlternativo={datosSeccionPrincipal.textoAlternativoImagen}
              />
            </div>
          </section>
        </div>
      </main>

      <Footer {...datosFooter} />
    </div>
  );
};

export default PlantillaInicio;