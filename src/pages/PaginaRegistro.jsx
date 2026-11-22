import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import FormularioRegistro from "../components/organisms/FormularioRegistro";
import PlantillaPublica from "../components/templates/PlantillaPublica";
import { crearRegistroUsuarioDto } from "../dto/usuarioDto";
import { useTituloPagina } from "../hooks/useTituloPagina";
import { registrarUsuario } from "../services/authService";
import { obtenerSesion } from "../utils/autenticacion";

function PaginaRegistro() {
  const navigate = useNavigate();
  const [valores, setValores] = useState({ nombre: "", correo: "", password: "" });
  const [error, setError] = useState("");
  const [enviando, setEnviando] = useState(false);
  useTituloPagina("Crear cuenta");

  if (obtenerSesion()) return <Navigate to="/iniciar-sesion" replace />;

  function cambiarCampo(evento) {
    const { name, value } = evento.target;
    setValores((anteriores) => ({ ...anteriores, [name]: value }));
  }

  async function registrar(evento) {
    evento.preventDefault();
    if (enviando) return;

    const dto = crearRegistroUsuarioDto(valores);
    if (!dto.nombre || !dto.password.trim()) {
      setError("Ingresa un nombre y una contraseña válidos.");
      return;
    }

    setError("");
    setEnviando(true);
    try {
      const usuario = await registrarUsuario(dto);
      if (typeof usuario?.correo !== "string" || !usuario.correo) {
        setError("La API devolvió una cuenta incompleta.");
        return;
      }
      navigate("/iniciar-sesion", { replace: true, state: { correoRegistrado: usuario.correo } });
    } catch (fallo) {
      setError(fallo.response?.data?.mensaje ?? "No se pudo crear la cuenta. Intenta de nuevo.");
    } finally {
      setEnviando(false);
    }
  }

  return (
    <PlantillaPublica>
      <FormularioRegistro {...valores} error={error} enviando={enviando}
        onChange={cambiarCampo} onSubmit={registrar} />
    </PlantillaPublica>
  );
}

export default PaginaRegistro;
