import { useState } from "react";
import { useAutoCierre } from "./useAutoCierre";

export function useCrud(datos, textos) {
  const [editando, setEditando] = useState(null);
  const [mensaje, setMensaje] = useState(null);

  function cerrarMensaje() {
    setMensaje(null);
  }

  useAutoCierre(mensaje, cerrarMensaje, (textos?.segundosAutoCierre ?? 5) * 1000);

  function abrirNuevo() {
    setEditando({});
  }

  function abrirEditar(item) {
    setEditando(item);
  }

  function cancelar() {
    setEditando(null);
  }

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
    setMensaje(textos.mensajes.eliminado);
  }

  return {
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
