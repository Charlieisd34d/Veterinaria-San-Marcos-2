export default function Imagen({ ruta, textoAlternativo, className = "" }) {
  return (
    <img
      src={ruta}
      alt={textoAlternativo}
      className={`img-fluid rounded-4 w-100 object-fit-cover ${className}`.trim()}
    />
  );
}
