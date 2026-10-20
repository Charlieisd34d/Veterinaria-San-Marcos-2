import { useState } from "react";
import { useAutoCierre } from "./useAutoCierre";

export function useCrud(operaciones, textos) {
  const [editando, setEditando] = useState(null);
  const [mensaje, setMensaje] = useState(null);

  function cerrarMensaje() {
    setMensaje(null);
  }

  useAutoCierre(mensaje, cerrarMensaje, textos.segundosAutoCierre * 1000);

  function abrirNuevo() {
    setEditando({});
  }

  function abrirEditar(item) {
    setEditando(item);
  }

  function cancelar() {
    setEditando(null);
  }

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
    setMensaje(textos.mensajes.eliminado);
  }

  return {
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