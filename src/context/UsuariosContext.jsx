import { createContext, useContext, useState } from "react";
import * as usuarioService from "../services/usuarioService";

const UsuariosContext = createContext(null);

export function UsuariosProvider({ children }) {
  const [usuarios, setUsuarios] = useState(() => usuarioService.listarUsuarios());

  function crear(datos) {
    usuarioService.crearUsuario(datos);
    setUsuarios(usuarioService.listarUsuarios());
  }

  function actualizar(id, cambios) {
    usuarioService.actualizarUsuario(id, cambios);
<<<<<<< HEAD
    setUsuarios(usuarioService.listarUsuario());
  }

  function eliminar(id) {
    usuarioService.eliminarCliente(id);
=======
    setUsuarios(usuarioService.listarUsuarios());
  }

  function eliminar(id) {
    usuarioService.eliminarUsuario(id);
>>>>>>> origin/backup/admin-fix-24-10-2026
    setUsuarios(usuarioService.listarUsuarios());
  }

  return (
    <UsuariosContext.Provider value={{ usuarios, crear, actualizar, eliminar }}>
      {children}
    </UsuariosContext.Provider>
  );
}

export function useUsuarios() {
  const contexto = useContext(UsuariosContext);
  if (!contexto) {
    throw new Error("useusuario debe usarse dentro de un UsuariosProvider");
  }
  return contexto;
}