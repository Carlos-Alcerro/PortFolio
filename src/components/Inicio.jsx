import { dataSocialNetwork } from "../data/SocialIcons";
import { Link } from "react-router-dom";
const Inicio = () => {
  return (
    <div
      className="w-full h-auto px-12 py-10 md:px-20 lg:px-32 md:py-16 lg:py-20 mt-20"
      id="inicio"
    >
      <div className="px-12 py-10 md:px-20 lg:px-32 md:py-16 lg:py-24">
        <div className="text-center py-5">
          <p className="font-black text-3xl md:text-4xl lg:text-5xl uppercase">
            Hola, soy carlos alcerro<span className="text-sky-900">.</span>
          </p>
        </div>
        <div className="py-5 text-center" id="Inicio">
          <p className="text-xl text-gray-700">
            Soy un profesional con muchas ganas de aprender día a día, altamente
            motivado. Mi pasión por el desarrollo web, análisis de datos y otros
            campos de mi carrera me motivan a mejorar. Estoy comprometido con el
            aprendizaje continuo y dispuesto a asumir nuevos desafíos en mi vida
            profesional.
          </p>
        </div>
        <div className="flex justify-center gap-4  my-10">
          {dataSocialNetwork.map(({ id, icon, name, link }) => (
            <Link to={link} key={id} target="_blank" rel="noreferrer">
              <img
                src={`/src/svg/${icon}.svg`}
                alt={name}
                width="40"
                height="40"
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Inicio;
