import React, { useEffect, useState } from 'react';

import PlantillaPublica from '../components/templates/PlantillaPublica';
import ListaCitas from '../components/organisms/ListaCitas';

import { obtenerCitas } from '../services/citasService';

function PaginaHistorialCitas(props) {
  const usuarioCorreo = props.usuarioCorreo;

  const [citas, setCitas] = useState([]);

  useEffect(() => {
    const todasLasCitas = obtenerCitas();

    if (!usuarioCorreo) {
      setCitas([]);
      return;
    }

    const citasUsuario = todasLasCitas.filter(
      (cita) =>
        cita.correo?.toLowerCase() === usuarioCorreo.toLowerCase()
    );

    setCitas(citasUsuario);
  }, [usuarioCorreo]);

  return (
    <PlantillaPublica>
      <main className="container py-5">

        <div className="mb-4">
          <h1 className="fw-bold">
            Historial de mis citas
          </h1>

          <p className="text-muted">
            Consulta las solicitudes que has realizado
            en Veterinaria San Marcos.
          </p>
        </div>

        <ListaCitas
          citas={citas}
          esAdministrador={false}
        />

      </main>
    </PlantillaPublica>
  );
}

export default PaginaHistorialCitas;