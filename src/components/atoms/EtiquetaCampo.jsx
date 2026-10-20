function EtiquetaCampo(props){
    return(
        <label htmlFor={props.para} className= "form-label fw-medium">
            {props.texto}
        </label>
    );
}

export default EtiquetaCampo;