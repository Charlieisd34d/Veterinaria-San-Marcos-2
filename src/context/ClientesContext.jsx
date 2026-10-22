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
    setClientes(clienteService.listarClientes());
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