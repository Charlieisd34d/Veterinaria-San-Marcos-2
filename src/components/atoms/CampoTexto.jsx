import Form from "react-bootstrap/Form";

function CampoTexto(props){
    const tipo = props.tipo || "text";

    return(
        <Form.Control type={tipo} className="form-control" 
        placeholder={props.placeholder} 
        value={props.value} onChange={props.onChange}
        />
    );
}


export default CampoTexto;