import { useNavigate } from 'react-router-dom';
import PlantillaPublica from '../components/templates/PlantillaPublica';
import FormularioLogin from '../components/organisms/FormularioLogin';

const Login = () => {
    const navigate = useNavigate();
    const manejarIngresoExitoso = (datosUsuario) => {
    console.log("Datos válidos:", datosUsuario);
    // Redirige a la vista de servicios o inicio sin recargar la página
    navigate('/servicios');
};
    return (
        <PlantillaPublica>
        <div className="d-flex flex-column align-items-center justify-content-center py-5">
        <h2 className="fw-bold mb-4" style={{ color: '#0d3b33' }}>Acceso Privado</h2>
        <p className="text-muted mb-4">Ingresa tus credenciales para gestionar la veterinaria.</p>
        <FormularioLogin alEnviarExitoso={manejarIngresoExitoso} />
        </div>
        </PlantillaPublica>
        );
    };
export default Login;