import { useSolicitudes } from '../context/SolicitudesContext';
import { useClientes } from '../context/ClientesContext';
import { listarCitasAdministrativas, prepararComprobanteCita } from '../services/citasService';
import { filtrarSolicitudesRegistradas } from '../services/solicitudesService';
import { agregarNombreCliente } from '../utils/solicitudes';
import { useCambiosAlmacenamiento } from './useCambiosAlmacenamiento';

export function useSolicitudesAdministrativas() {
  useCambiosAlmacenamiento();
  const { solicitudes } = useSolicitudes();
  const { clientes } = useClientes();
  const otrasSolicitudes = agregarNombreCliente(filtrarSolicitudesRegistradas(solicitudes), clientes);
  try {
    const citas = listarCitasAdministrativas().map(prepararComprobanteCita);
    return { filas: [...citas, ...otrasSolicitudes], error: '' };
  } catch {
    return { filas: otrasSolicitudes, error: 'No se pudo leer el registro local de citas.' };
  }
}
