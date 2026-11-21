export function toCreateSolicitudRequestDTO(datos) {
  return {
    cliente: String(datos?.cliente ?? "Cliente Tienda Online").trim(),
    servicio: String(datos?.servicio ?? "").trim(),
    fecha: datos?.fecha || new Date().toISOString().split("T")[0],
    estado: datos?.estado || "Pendiente",
    total: Number(datos?.total ?? 0),
  };
}

export function fromSolicitudDTO(solicitudBackend) {
  return {
    id: solicitudBackend.id,
    cliente: solicitudBackend.cliente ?? "",
    servicio: solicitudBackend.servicio ?? "",
    fecha: solicitudBackend.fecha ?? "",
    estado: solicitudBackend.estado ?? "Pendiente",
    total: Number(solicitudBackend.total ?? 0),
  };
}

export function fromSolicitudesListDTO(listaBackend) {
  if (!Array.isArray(listaBackend)) return [];
  return listaBackend.map(fromSolicitudDTO);
}
