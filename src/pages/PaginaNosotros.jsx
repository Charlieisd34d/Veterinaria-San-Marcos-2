import PlantillaPublica from '../components/templates/PlantillaPublica';
import SeccionNosotros from '../components/organisms/SeccionNosotros';

const datosNosotros = {
  titulo: "Sobre nosotros",
  subtitulo: "Veterinaria San Marcos atiende a las familias de Rancagua desde 2009.",
  parrafo1: "Somos un equipo formado por médicos y técnicos veterinarios comprometidos con una atención clara, responsable y cercana.",
  parrafo2: "Nuestro objetivo es facilitar el cuidado de cada mascota mediante citas en línea, fichas clínicas digitales y recordatorios de vacunación.",
  puntosClave: [
    "15 años de experiencia en la región",
    "Equipo veterinario certificado",
    "Fichas clínicas digitales y protegidas"
  ],
  imagenUrl: "https://images.unsplash.com/photo-1544568100-847a948585b9?w=800&auto=format&fit=crop&q=80"
};

export default function PaginaNosotros() {
  return (
    <PlantillaPublica>
      <SeccionNosotros datosNosotros={datosNosotros} />
    </PlantillaPublica>
  );
}
