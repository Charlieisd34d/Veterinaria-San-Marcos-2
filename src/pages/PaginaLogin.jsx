import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PlantillaPublica from '../components/templates/PlantillaPublica';
import FormularioLogin from '../components/organisms/FormularioLogin';
import datosFormulario from '../data/formularioLogin.json'; 

export default function PaginaLogin() {
  const [mensaje, setMensaje] = useState(null);
  const navigate = useNavigate();

  function manejarEnvioExitoso(valores) {
    navigate('/');
  }

  return (
    <PlantillaPublica 
      mensaje={mensaje}
      onCerrar={() => setMensaje(null)}
      onNavegar={navigate}
    >
      <div className="row justify-content-center py-4">
        <div className="col-12 col-md-8 col-lg-5">
          <FormularioLogin
            titulo={datosFormulario.titulo}
            campos={datosFormulario.campos}
            textoBoton={datosFormulario.textoBoton}
            varianteBoton={datosFormulario.varianteBoton}
            onEnviar={manejarEnvioExitoso}
          />
        </div>
      </div>
    </PlantillaPublica>
  );
}