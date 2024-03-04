import { habilidades } from "../data/habilidades";

const About = () => {
  return (
    <>
      <div
        className="px-12 py-16 md:px-20 lg:px-32 md:py-16 lg:py-24 mt-10"
        id="Acerca"
      >
        <p className="text-3xl md:text-4xl lg:text-5xl font-black uppercase text-center">
          Acerca de mí
        </p>
        <p className="text-xl mt-4 text-gray-700 text-center">
          Aquí encontraras más información sobre mí, lo que hago y mis
          habilidades actuales en programación y mas enfocados a la tecnología.
        </p>
        <div className="mt-24 grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="col-span-1">
            <p className="text-2xl font-black text-center">Conóceme </p>
            <p className="text-gray-700 text-xl mt-5">
              Soy un profesional entusiasta del desarrollo web con una pasión
              por la innovación continua en este campo dinámico. Mi objetivo
              principal es consolidar mi experiencia y habilidades en el
              desarrollo fullStack.
            </p>
            <p className="text-gray-700 text-xl mt-5">
              Además de mi enfoque en el desarrollo, tengo un profundo interés
              en áreas complementarias como el análisis de datos y la gestión de
              bases de datos, tanto relacionales como no relacionales. Me
              considero una persona orientada a los desafíos, comprometida con
              el crecimiento profesional y la mejora continua de mis
              habilidades.
            </p>
            <p className="text-gray-700 text-xl mt-5">
              Estoy abierto a nuevas oportunidades laborales que me permitan
              contribuir, aprender y desarrollarme. Si tienes una oportunidad
              profesional que coincida con mi perfil y experiencia, estaré
              encantado de recibir tu contacto.
            </p>
          </div>
          <div className="md:col-span-1 md:mt-0 lg:mt-0 mt-10">
            <p className="text-2xl font-black text-center">Mis habilidades</p>
            <div className="grid grid-cols-4 gap-5 my-10">
              {habilidades.map((hab) => (
                <div className="mx-auto" key={hab.id}>
                  {hab.icon}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
