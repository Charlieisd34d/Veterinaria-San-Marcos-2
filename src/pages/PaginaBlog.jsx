import { useState } from 'react';
import PlantillaPublica from '../components/templates/PlantillaPublica';
import ListaServicios from '../components/organisms/ListaServicios';
import { useTituloPagina } from '../hooks/useTituloPagina';
import articulosBlog from '../data/blog.json';

function renderizarCuerpoArticulo(articulo) {
  if (!articulo) {
    return <p className="mb-0 text-muted">Contenido del artículo no disponible.</p>;
  }

  if (Array.isArray(articulo.contenido) && articulo.contenido.length > 0) {
    return articulo.contenido.map(function (parrafo, indice) {
      const esUltimo = indice === articulo.contenido.length - 1;
      return (
        <p key={`${articulo.id}-p-${indice}`} className={esUltimo ? 'mb-0' : 'mb-3'}>
          {parrafo}
        </p>
      );
    });
  }

  if (typeof articulo.contenido === 'string' && articulo.contenido.trim() !== '') {
    return <p className="mb-0">{articulo.contenido}</p>;
  }

  if (articulo.resumen) {
    return <p className="mb-0">{articulo.resumen}</p>;
  }

  return <p className="mb-0 text-muted">Contenido del artículo no disponible.</p>;
}

export default function PaginaBlog() {
  useTituloPagina('Blog');
  const [articuloActivo, setArticuloActivo] = useState(null);

  function manejarLeerArticulo(id) {
    const encontrado =
      articulosBlog.find(function (art) {
        return art.id === id;
      }) ?? null;
    setArticuloActivo(encontrado);
  }

  function manejarCerrarArticulo() {
    setArticuloActivo(null);
  }

  const articulosConAccion = articulosBlog.map(function (art) {
    return {
      ...art,
      onAccion: function () {
        manejarLeerArticulo(art.id);
      },
    };
  });

  return (
    <PlantillaPublica>
      <div className="container py-4">
        <ListaServicios
          insignia="Artículos y guías"
          tituloSeccion="Blog"
          descripcionSeccion="Consejos breves para cuidar la salud y el bienestar de tu mascota."
          items={articulosConAccion}
        />

        {articuloActivo && (
          <div
            className="modal fade show d-block bg-dark bg-opacity-50"
            role="dialog"
            aria-modal="true"
          >
            <div className="modal-dialog modal-lg modal-dialog-scrollable">
              <div className="modal-content">
                <div className="modal-header">
                  <h2 className="modal-title h5 mb-0">
                    {articuloActivo.titulo ?? articuloActivo.nombre}
                  </h2>
                  <button
                    type="button"
                    className="btn-close"
                    aria-label="Cerrar"
                    onClick={manejarCerrarArticulo}
                  />
                </div>
                <div className="modal-body">
                  {(articuloActivo.categoria || articuloActivo.fecha) && (
                    <p className="text-muted small mb-3">
                      {[articuloActivo.categoria, articuloActivo.fecha]
                        .filter(Boolean)
                        .join(' · ')}
                    </p>
                  )}
                  {renderizarCuerpoArticulo(articuloActivo)}
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={manejarCerrarArticulo}
                  >
                    Cerrar
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </PlantillaPublica>
  );
}