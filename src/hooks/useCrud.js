import { useState } from "react";
import { useAutoCierre } from "./useAutoCierre";

<<<<<<< HEAD
export function useCrud(operaciones, textos) {
=======
export function useCrud(datos, textos) {
>>>>>>> origin/backup/admin-fix-24-10-2026
  const [editando, setEditando] = useState(null);
  const [mensaje, setMensaje] = useState(null);

  function cerrarMensaje() {
    setMensaje(null);
  }

<<<<<<< HEAD
  useAutoCierre(mensaje, cerrarMensaje, textos.segundosAutoCierre * 1000);
=======
  useAutoCierre(mensaje, cerrarMensaje, (textos?.segundosAutoCierre ?? 5) * 1000);
>>>>>>> origin/backup/admin-fix-24-10-2026

  function abrirNuevo() {
    setEditando({});
  }

  function abrirEditar(item) {
    setEditando(item);
  }

  function cancelar() {
    setEditando(null);
  }

<<<<<<< HEAD
  function guardar(datos) {
    if (editando.id) {
      operaciones.actualizar(editando.id, datos);
      setMensaje(textos.mensajes.actualizado);
    } else {
      operaciones.crear(datos);
      setMensaje(textos.mensajes.creado);
    }
    setEditando(null);
  }

  function eliminar(id) {
    operaciones.eliminar(id);
=======
  function guardar(valores) {
    if (editando && editando.id !== undefined) {
      datos.actualizar(editando.id, valores);
      setMensaje(textos.mensajes.actualizado);
    } else {
      datos.crear(valores);
      setMensaje(textos.mensajes.creado);
    }
    cancelar();
  }

  function eliminar(id) {
    datos.eliminar(id);
>>>>>>> origin/backup/admin-fix-24-10-2026
    setMensaje(textos.mensajes.eliminado);
  }

  return {
<<<<<<< HEAD
    editando: editando,
    mensaje: mensaje,
    abrirNuevo: abrirNuevo,
    abrirEditar: abrirEditar,
    cancelar: cancelar,
    guardar: guardar,
    eliminar: eliminar,
    cerrarMensaje: cerrarMensaje,
  };
}
=======
    editando,
    mensaje,
    abrirNuevo,
    abrirEditar,
    cancelar,
    guardar,
    eliminar,
    cerrarMensaje,
  };
}
>>>>>>> origin/backup/admin-fix-24-10-2026
