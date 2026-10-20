import Form from "react-bootstrap/Form";

function CampoTexto(props) {
  return (
    <Form.Control
      id={props.id}
      type={props.tipo || "text"}
      placeholder={props.placeholder}
      value={props.value}
      onChange={props.onChange}
      isInvalid={props.invalido}
    />
  );
}

export default CampoTexto;