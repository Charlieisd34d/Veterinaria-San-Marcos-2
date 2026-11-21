import { createContext, useContext, useState } from "react";
import * as clienteService from "../services/clienteService";

const ClientesContext = createContext(null);

export function ClientesProvider({ children }) {
  const [clientes, setClientes] = useState(() => clienteService.listarClientes());

  function crear(datos) {
    clienteService.crearCliente(datos);
    setClientes(clienteService.listarClientes());
  }

  function actualizar(id, cambios) {
    clienteService.actualizarCliente(id, cambios);
    setClientes(clienteService.listarClientes());
  }

  function eliminar(id) {
    clienteService.eliminarCliente(id);
<<<<<<< HEAD
    setClientes(clienteService.listarClientes());
=======
    setCliente(clienteService.listarClientes());
>>>>>>> origin/backup/admin-fix-24-10-2026
  }

  return (
    <ClientesContext.Provider value={{ clientes, crear, actualizar, eliminar }}>
      {children}
    </ClientesContext.Provider>
  );
}

export function useClientes() {
  const contexto = useContext(ClientesContext);
  if (!contexto) {
    throw new Error("useClientes debe usarse dentro de un clientesProvider");
  }
  return contexto;
}