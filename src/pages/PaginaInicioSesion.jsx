import { useState } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import PlantillaPublica from "../components/templates/PlantillaPublica";
import FormularioLogin from "../components/organisms/FormularioLogin";
import SesionCliente from "../components/organisms/SesionCliente";
import { crearLoginDto } from "../dto/usuarioDto";
import { iniciarSesion } from "../services/authService";
import { cerrarSesion, guardarSesion, obtenerSesion } from "../utils/autenticacion";

function PaginaInicioSesion() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const correoRegistrado = state?.correoRegistrado;
  const [correo, setCorreo] = useState(correoRegistrado ?? "");
  const [sesion, setSesion] = useState(obtenerSesion);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [enviando, setEnviando] = useState(false);

  if (sesion?.usuario.rol === "ADMIN") return <Navigate to="/admin" replace />;

  function salir() {
    cerrarSesion();
    setSesion(null);
    setPassword("");
    navigate("/iniciar-sesion", { replace: true });
  }

  if (sesion) {
    return (
      <PlantillaPublica>
        <SesionCliente nombre={sesion.usuario.nombre} correo={sesion.usuario.correo} onCerrarSesion={salir} />
      </PlantillaPublica>
    );
  }

  async function alIniciarSesion(evento) {
    evento.preventDefault();
    if (enviando) return;

    setError("");
    setEnviando(true);
    try {
      const respuesta = await iniciarSesion(crearLoginDto({ correo, password }));
      const { token, usuario } = respuesta ?? {};
      if (typeof token !== "string" || !token || !usuario?.rol) {
        setError("La API devolvió una sesión incompleta.");
        return;
      }
      const nuevaSesion = { token, usuario };
      guardarSesion(nuevaSesion);
      setSesion(nuevaSesion);
      setPassword("");
    } catch (fallo) {
      setError(fallo.response?.data?.mensaje ?? "No se pudo iniciar sesión. Verifica la conexión con la API.");
    } finally {
      setEnviando(false);
    }
  }

  return (
    <PlantillaPublica>
      <FormularioLogin
        correo={correo}
        cuentaCreada={Boolean(correoRegistrado)}
        password={password}
        error={error}
        enviando={enviando}
        onCambiarCorreo={setCorreo}
        onCambiarPassword={setPassword}
        onSubmit={alIniciarSesion}
      />
    </PlantillaPublica>
  );
}

export default PaginaInicioSesion;
