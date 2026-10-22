import Modal from "react-bootstrap/Modal";

function ModalComun({ show, onHide, titulo, children }) {
  return (
    <Modal show={show} onHide={onHide} centered size="md">
      <Modal.Header closeButton className="border-0 pb-0">
        <Modal.Title className="h5 ms-2 mt-2">{titulo}</Modal.Title>
      </Modal.Header>
      <Modal.Body className="p-4">
        {children}
      </Modal.Body>
    </Modal>
  );
}

export default ModalComun;