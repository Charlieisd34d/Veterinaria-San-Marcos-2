import { useNavigate } from 'react-router-dom';
import PlantillaPublica from '../components/templates/PlantillaPublica';
import FormularioRegistro from '../components/organisms/FormularioRegistro';
import datosRegistro from '../data/formularioregistro.json';

export default function PaginaRegistro() {
  const navigate = useNavigate();

  function manejarRegistroExitoso() {
    navigate('/login');
  }

  return (
    <PlantillaPublica onNavegar={navigate}>
      <div className="row justify-content-center py-4">
        <div className="col-12 col-md-8 col-lg-5">
          <FormularioRegistro
            titulo={datosRegistro.titulo}
            campos={datosRegistro.campos}
            textoBoton={datosRegistro.textoBoton}
            varianteBoton={datosRegistro.varianteBoton}
            onEnviar={manejarRegistroExitoso}
          />
        </div>
      </div>
    </PlantillaPublica>
  );
}