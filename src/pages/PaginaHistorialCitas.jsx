import { Navigate } from 'react-router-dom';
import PlantillaPublica from '../components/templates/PlantillaPublica';
import ListaCitas from '../components/organisms/ListaCitas';
import { useClienteCitas } from '../hooks/useClienteCitas';
import { useTituloPagina } from '../hooks/useTituloPagina';
import { obtenerCitas } from '../services/citasService';

function PaginaHistorialCitas() {
  const cliente = useClienteCitas();
  useTituloPagina('Historial de mis citas');
  if (!cliente) return <Navigate to="/iniciar-sesion" replace />;

  let citas;
  try {
    citas = obtenerCitas();
  } catch {
    // Se muestra el fallo de lectura en el historial.
  }

  return (
    <PlantillaPublica>
      <section aria-labelledby="titulo-historial-citas">
        <h1 id="titulo-historial-citas" className="fw-bold mb-4">Historial de mis citas</h1>
        {citas ? <ListaCitas citas={citas} /> : (
          <div className="alert alert-danger" role="alert">
            No se pudo leer el historial de citas en este navegador.
          </div>
        )}
      </section>
    </PlantillaPublica>
  );
}

export default PaginaHistorialCitas;
