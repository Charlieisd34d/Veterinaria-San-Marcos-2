import ElementoBarraSuperior from "../molecules/ElementoBarraSuperior";

function BarraSuperior(props) {
  return (
    <div className="bg-light py-2 border-bottom">
      <div className="container-fluid d-flex justify-content-between align-items-center">
        {props.elementos.map((elemento) => (
          <ElementoBarraSuperior
            key={elemento.id}
            claseIcono={elemento.claseIcono}
            texto={elemento.texto}
          />
        ))}
      </div>

      <Modal show={mostrarModalLogin} onHide={cerrarModal} centered size="md">
        <Modal.Header closeButton>
          <Modal.Title className="h5">
            Acceso al Panel de Administración
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FormularioLogin 
            onLoginExitoso={() => {
              cerrarModal();
              window.location.href = "/admin"; 
            }} 
          />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default BarraSuperior;