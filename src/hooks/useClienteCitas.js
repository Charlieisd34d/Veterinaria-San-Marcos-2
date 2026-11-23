import { useCambiosAlmacenamiento } from './useCambiosAlmacenamiento';
import { obtenerClienteCitas } from '../utils/clienteCitas';

export function useClienteCitas() {
  useCambiosAlmacenamiento();
  return obtenerClienteCitas();
}
