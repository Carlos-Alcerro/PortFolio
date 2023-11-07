const About = () => {
  return (
    <>
      <div
        className="text-center px-12 py-16 md:px-20 lg:px-32 md:py-16 lg:py-24 mt-10"
        id="Acerca"
      >
        <p className="text-3xl md:text-4xl lg:text-5xl font-black uppercase">
          Acerca de mí
        </p>
        <p className="text-xl mt-4 text-gray-700">
          Aquí encontraras más información sobre mí, lo que hago y mis
          habilidades actuales en programación y mas enfocados a la tecnología.
        </p>
        <div className="mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
          <div className="col-span-1">
            <p className="text-2xl font-black">Conóceme </p>
            <p className="text-gray-700 text-xl mt-5">
              Soy un profesional apasionado por el desarrollo web, me gusta
              mucho el hecho de ir innovando día a día en el mundo del
              desarrollo, una de mis principales metas es convertirme en un
              desarrollador fullstack dentro de poco.
            </p>
            <p className="text-gray-700 text-xl mt-5">
              Además de ser desarrollador, me gusta mucho otros ámbitos, como
              ser el análisis de datos, el estudio de bases de datos, bien sea
              relacionales como no relacionales, etc. Me considero una persona
              la cual le gustan mucho los desafíos y aprender día con día,
              dispuesto a mejorar cada una de mis habilidades para ser un mejor
              profesional.
            </p>
            <p className="text-gray-700 text-xl mt-5">
              Estoy abierto a oportunidades laborales donde pueda contribuir,
              aprender y crecer. Si tienes una buena oportunidad que coincida
              con mis habilidades y experiencia, no dudes en contactarme .
            </p>
          </div>
          <div className="md:col-span-1 lg:col-span-1 md:mt-0 lg:mt-0 mt-10">
            <p className="text-2xl font-black">Mis habilidades</p>
            <div className="flex md:ml-10 ml-10 justify-center gap-8 my-10">
              <img
                src="svg/html.svg"
                alt="html"
                className="lg:w-16 lg:h-16 md:w-12 md:h-12 w-8 h-8"
              />
              <img
                src="svg/css.svg"
                alt="css"
                className="lg:w-16 lg:h-16 md:w-12 md:h-12 w-8 h-8"
              />
              <img
                src="svg/javascript.svg"
                alt="js"
                className="lg:w-16 lg:h-16 md:w-12 md:h-12 w-8 h-8"
              />
              <img
                src="svg/react.svg"
                alt="react"
                className="lg:w-16 lg:h-16 md:w-12 md:h-12 w-8 h-8"
              />
              <img
                src="svg/tailwind-css.svg"
                alt="tailwind"
                className="lg:w-16 lg:h-16 md:w-12 md:h-12 w-8 h-8"
              />
            </div>
            <div className="flex justify-center md:ml-10 ml-10 gap-8 my-10 px-28">
              <img
                src="svg/mongodb.svg"
                alt="mongo"
                className="lg:w-16 lg:h-16 md:w-12 md:h-12 w-8 h-8"
              />
              <img
                src="svg/mysql.svg"
                alt="mysql"
                className="lg:w-16 lg:h-16 md:w-12 md:h-12 w-8 h-8"
              />
              <img
                src="svg/git.svg"
                alt="git"
                className="lg:w-16 lg:h-16 md:w-12 md:h-12 w-8 h-8"
              />
              <img
                src="svg/github.svg"
                alt="gitHub"
                className="lg:w-16 lg:h-16 md:w-12 md:h-12 w-8 h-8"
              />
              <img
                src="svg/power-bi.svg"
                alt="powerbi"
                className="lg:w-16 lg:h-16 md:w-12 md:h-12 w-8 h-8"
              />
            </div>
            <div className="flex md:ml-10 ml-10 justify-center gap-8 my-10 px-28">
              <img
                src="svg/vite.svg"
                alt="vite"
                className="lg:w-16 lg:h-16 md:w-12 md:h-12 w-8 h-8"
              />
              <img
                src="svg/nextjs.svg"
                alt="nextjs"
                className="lg:w-16 lg:h-16 md:w-12 md:h-12 w-8 h-8"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
