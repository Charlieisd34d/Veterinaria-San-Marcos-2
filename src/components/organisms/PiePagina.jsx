function PiePagina({ nombre = "Veterinaria San Marcos", descripcion, contactos = [], textoDerechos }) {
  return (
    <footer className="bg-dark text-white mt-auto py-5">
      <div className="container">
        <div className="row g-4">
          <div className="col-12 col-md-5">
            <h5 className="fw-bold mb-3">{nombre}</h5>
            <p className="text-white-50 mb-0">{descripcion}</p>
          </div>

          <div className="col-12 col-md-4">
            <h6 className="fw-bold mb-3">Contacto</h6>
            <ul className="list-unstyled mb-0 text-white-50">
              {contactos.map((contacto, index) => (
                <li key={`${contacto.titulo}-${index}`} className="mb-2">
                  <span className="fw-semibold text-white">{contacto.titulo}:</span> {contacto.valor}
                </li>
              ))}
            </ul>
          </div>

          <div className="col-12 col-md-3 text-md-end">
            <p className="mb-0 text-white-50">{textoDerechos}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default PiePagina;
