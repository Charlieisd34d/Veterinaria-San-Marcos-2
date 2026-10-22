export function agregarNombreCliente(solicitudes, clientes) {
  return solicitudes.map((solicitud) => {
    const cliente = clientes.find((c) => c.id === solicitud.clienteId);
    return { ...solicitud, cliente: cliente ? cliente.nombre : "—" };
  });
}

export function filtrarPorCliente(solicitudes, clienteId) {
  return solicitudes.filter((s) => s.clienteId === clienteId);
}

export function contarPorEstado(solicitudes, estado) {
  return solicitudes.filter((s) => s.estado === estado).length;
}