import TextoDerechosAutor from '../atoms/TextoDerechosAutor';
import IconoTexto from '../atoms/IconoTexto'

const PiePagina = ({ textoDerechos, telefonoContacto, correoContacto }) => {
  return (
    <footer className="bg-dark text-white py-4 mt-auto">
      <div className="container d-flex justify-content-between align-items-center">
        <div>
          <h6 className="mb-0 fw-bold">Veterinaria San Marcos</h6>
          <small className="text-white-50">Atención veterinaria en Rancagua.</small>
        </div>
        <div className="d-flex gap-4">
          <IconoTexto 
            claseIcono="bi bi-telephone text-white-50" 
            texto={telefonoContacto} 
            clasePersonalizada="text-white-50 small" 
          />
          <IconoTexto 
            claseIcono="bi bi-envelope text-white-50" 
            texto={correoContacto} 
            clasePersonalizada="text-white-50 small" 
          />
        </div>
        <TextoDerechosAutor texto={textoDerechos} />
      </div>
    </footer>
  );
};

export default PiePagina;