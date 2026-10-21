import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PlantillaPublica from '../components/templates/PlantillaPublica';
import FormularioCita from '../components/organisms/FormularioCita';
import datosCita from '../data/formularioCita.json';

export default function PaginaSolicitarCita() {
  const [mensajeExito, setMensajeExito] = useState(null);
  const navigate = useNavigate();

  function manejarEnvioExitoso() {
    setMensajeExito({
      texto: "¡Cita solicitada con éxito! Nos pondremos en contacto contigo.",
      variante: "success"
    });
  }

  return (
    <PlantillaPublica 
      mensaje={mensajeExito}
      onCerrar={() => setMensajeExito(null)}
      onNavegar={navigate}
    >
      <div className="row justify-content-center py-4">
        <div className="col-12 col-md-8 col-lg-6">
          <FormularioCita
            titulo={datosCita.titulo}
            campos={datosCita.campos}
            textoBoton={datosCita.textoBoton}
            varianteBoton={datosCita.varianteBoton}
            onEnviar={manejarEnvioExitoso}
          />
        </div>
      </div>
    </PlantillaPublica>
  );
}