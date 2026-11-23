import { Navigate, useNavigate, useParams } from "react-router-dom";
import GestionCita from "../components/organisms/GestionCita";
import ComprobanteSolicitud from "../components/organisms/ComprobanteSolicitud";
import PlantillaAdmin from "../components/templates/PlantillaAdmin";
import PlantillaPublica from "../components/templates/PlantillaPublica";
import { useClienteCitas } from "../hooks/useClienteCitas";
import { useSolicitudesAdministrativas } from "../hooks/useSolicitudesAdministrativas";
import { useTituloPagina } from "../hooks/useTituloPagina";
import { obtenerCitas, prepararComprobanteCita } from "../services/citasService";
import config from "../data/admin/solicitudesConfig.json";

const textos = config.comprobante;

function Comprobante({ solicitud, error, volver, textosComprobante = textos }) {
  const navigate = useNavigate();
  useTituloPagina(textosComprobante.titulo);

  return (
    <ComprobanteSolicitud
      solicitud={solicitud}
      textos={error ? { ...textosComprobante, noEncontrada: error } : textosComprobante}
      onVolver={() => navigate(volver)}
    />
  );
}

export function ComprobanteSolicitudAdmin() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { filas, error } = useSolicitudesAdministrativas();
  const solicitud = filas.find((fila) => String(fila.id) === id);
  return (
    <PlantillaAdmin>
      <Comprobante solicitud={solicitud} error={error} volver="/admin/solicitudes" />
      {solicitud?.usuarioId != null && (
        <GestionCita
          key={solicitud.id}
          cita={solicitud}
          onEliminada={() => navigate("/admin/solicitudes", { replace: true, state: { citaEliminada: true } })}
        />
      )}
    </PlantillaAdmin>
  );
}

export function ComprobanteCitaCliente() {
  const cliente = useClienteCitas();
  const { id } = useParams();
  if (!cliente) return <Navigate to="/iniciar-sesion" replace />;

  let solicitud;
  let error;
  try {
    const cita = obtenerCitas().find((item) => String(item.id) === id);
    if (cita) solicitud = prepararComprobanteCita(cita);
  } catch {
    error = "No se pudo leer el comprobante en este navegador.";
  }

  return (
    <PlantillaPublica>
      <Comprobante
        solicitud={solicitud}
        error={error}
        volver="/historial-citas"
        textosComprobante={{ ...textos, volver: "Volver a Mis Citas" }}
      />
    </PlantillaPublica>
  );
}
