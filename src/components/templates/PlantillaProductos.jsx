import React from 'react';

// Organismos
import BarraSuperior from '../organisms/BarraSuperior';
import NavBar from '../organisms/NavBar';
import Footer from '../organisms/Footer';

// Átomos
import TituloPrincipal from '../atoms/TituloPrincipal';
import Parrafo from '../atoms/Parrafo';
import Boton from '../atoms/Boton';
import Imagen from '../atoms/Imagen';
import EtiquetaSeccion from '../atoms/EtiquetaSeccion';

const PlantillaProductos = ({
  datosBarraSuperior,
  datosNavBar,
  datosSeccionProductos,
  datosFooter
}) => {
  return (
    <div className="d-flex flex-column min-vh-100 position-relative">

      {/* Notificación flotante elegante */}
      {datosSeccionProductos.notificacion && (
        <div 
          className="position-fixed bottom-0 end-0 p-3" 
          style={{ zIndex: 1100 }}
        >
          <div className="alert alert-success shadow-lg border-0 d-flex align-items-center gap-2 mb-0 rounded-3 text-white bg-success">
            <i className="bi bi-check-circle-fill fs-5"></i>
            <div>{datosSeccionProductos.notificacion}</div>
          </div>
        </div>
      )}

      {/* 1. Barra Superior */}
      <BarraSuperior {...datosBarraSuperior} />

      {/* 2. Navegación Principal */}
      <NavBar {...datosNavBar} />

      {/* 3. Contenido Principal */}
      <main className="flex-grow-1 py-5">
        <div className="container" style={{ maxWidth: '980px' }}>
          
          <div className="mb-4">
            <TituloPrincipal texto={datosSeccionProductos.titulo} />
            <Parrafo 
              texto={datosSeccionProductos.subtitulo} 
              clasePersonalizada="text-secondary fs-6 mb-4"
            />
          </div>

          {/* Filtros por Categoría */}
          <div className="d-flex flex-wrap gap-2 mb-4">
            {datosSeccionProductos.categorias.map((cat) => (
              <Boton
                key={cat}
                texto={cat}
                variante={datosSeccionProductos.categoriaActiva === cat ? 'success' : 'outline-secondary'}
                onClick={() => datosSeccionProductos.alSeleccionarCategoria(cat)}
              />
            ))}
          </div>

          {/* Grilla de Productos */}
          <div className="row g-4">
            {(datosSeccionProductos.productos || []).map((producto) => (
              <div key={producto.id} className="col-12 col-md-6 col-lg-4">
                <div className="card h-100 border-0 shadow-sm overflow-hidden">
                  <Imagen
                    ruta={producto.imagen}
                    textoAlternativo={producto.nombre}
                    clasePersonalizada="card-img-top w-100 object-fit-cover"
                    altoMaximo="220px"
                  />
                  <div className="card-body d-flex flex-column p-4">
                    <EtiquetaSeccion texto={producto.categoria} />
                    <h5 className="card-title fw-bold text-dark mb-2">
                      {producto.nombre}
                    </h5>
                    <Parrafo
                      texto={producto.descripcion}
                      clasePersonalizada="text-muted small flex-grow-1 mb-3"
                    />
                    <div className="d-flex align-items-center justify-content-between mt-auto pt-2">
                      <span className="fw-bold fs-5 text-dark">
                        {datosSeccionProductos.formatearPrecio(producto.precio)}
                      </span>
                      <Boton
                        texto="Agregar"
                        variante="success"
                        onClick={() => datosSeccionProductos.alAgregarProducto(producto)}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </main>

      {/* 4. Pie de Página */}
      <Footer {...datosFooter} />

    </div>
  );
};

export default PlantillaProductos;