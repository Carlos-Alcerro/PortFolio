import { dataSocialNetwork } from "../data/SocialIcons";
import { Link } from "react-router-dom";
const Inicio = () => {
  return (
    <div
      className="w-full h-auto px-12 py-10 md:px-20 lg:px-32 md:py-16 lg:py-20 mt-20"
      id="inicio"
    >
      <div className="px-2 py-10 md:px-12 lg:px-20 md:py-16 lg:py-24">
        <div className="text-center py-5">
          <p className="font-black text-3xl md:text-4xl lg:text-5xl uppercase">
            Hola, soy carlos alcerro<span className="text-sky-900">.</span>
          </p>
        </div>
        <div className="py-5" id="Inicio">
          <p className="text-xl text-gray-700">
            Soy un profesional dedicado con un firme compromiso hacia el
            aprendizaje continuo y el crecimiento personal. Poseo una fuerte
            motivación para explorar y desarrollar mis habilidades en áreas como
            el desarrollo web, análisis de datos y otros campos relacionados con
            mi carrera. Mi pasión por estos temas impulsa mi constante búsqueda
            de mejoras y estoy siempre dispuesto a asumir nuevos desafíos en mi
            trayectoria profesional.
          </p>
        </div>
        <div className="flex justify-center gap-4  my-10">
          {dataSocialNetwork.map(({ id, icon, name, link }) => (
            <Link to={link} key={id} target="_blank" rel="noreferrer">
              <img src={`svg/${icon}.svg`} alt={name} width="40" height="40" />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Inicio;
