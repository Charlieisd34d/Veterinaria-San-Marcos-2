import React, { useEffect, useState } from 'react';

import PlantillaPublica from '../components/templates/PlantillaPublica';
import ListaCitas from '../components/organisms/ListaCitas';

import { obtenerCitas } from '../services/citasService';
import { obtenerSesion } from '../utils/autenticacion';

function obtenerCorreoAutenticado(correoProp) {
  if (typeof correoProp === 'string' && correoProp.trim()) {
    return correoProp.trim().toLowerCase();
  }

  const sesion = obtenerSesion();
  const correoSesion = sesion && sesion.usuario ? sesion.usuario.correo : '';

  return typeof correoSesion === 'string'
    ? correoSesion.trim().toLowerCase()
    : '';
}

function PaginaHistorialCitas(props) {
  const correoUsuario = obtenerCorreoAutenticado(props.usuarioCorreo);
  const [citas, setCitas] = useState([]);

  useEffect(
    function () {
      if (!correoUsuario) {
        setCitas([]);
        return;
      }

      const todasLasCitas = obtenerCitas();
      const citasUsuario = todasLasCitas.filter(function (cita) {
        return (
          cita &&
          typeof cita.correo === 'string' &&
          cita.correo.trim().toLowerCase() === correoUsuario
        );
      });

      setCitas(citasUsuario);
    },
    [correoUsuario]
  );

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

        {!correoUsuario ? (
          <div className="alert alert-warning text-center">
            Debes iniciar sesión para consultar tu historial de citas.
          </div>
        ) : (
          <ListaCitas
            citas={citas}
            esAdministrador={false}
          />
        )}
      </main>
    </PlantillaPublica>
  );
}

export default PaginaHistorialCitas;