import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";

const Proyectos = () => {
  return (
    <div
      className="mt-10 px-12 py-16 md:px-20 lg:px-32 md:py-16 lg:py-24"
      id="proyectos"
    >
      <p className="uppercase text-center text-xl md:3xl lg:text-4xl font-black">
        Proyectos
      </p>
      <p className="text-center text-xl mt-4 text-gray-700">
        Aquí encontrarás algunos de los proyectos personales y académicos en los
        cuales he trabajado, tanto de forma individual como en equipo.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 mt-20">
        <Carousel showStatus={false} showThumbs={false} className="mt-5">
          <div>
            <img src="images/FiestisimoPT1.JPG" />
          </div>
          <div>
            <img src="images/FiestisimoPT2.JPG" />
          </div>
          <div>
            <img src="images/FiestisimoPT3.JPG" />
          </div>
          <div>
            <img src="images/FiestisimoPT4.JPG" />
          </div>
        </Carousel>
        <div className="px-5 block lg:px-20 md:px-16 lg:mt-16 md:mt-12 mt-8">
          <p className="text-center text-2xl font-bold">
            E-commerce Repostería
          </p>
          <p className="text-xl mt-5 text-gray-700 ">
            Se diseñó este sitio web para una repostería con el objetivo de
            fortalecer su relación con los clientes. A través de la plataforma,
            los usuarios pueden explorar la variedad de postres disponible y
            realizar pedidos de manera sencilla.
          </p>
          <div className="mt-10">
            <Link
              to="https://github.com/Carlos-Alcerro/E-commerce-Pasteleria"
              target="_blank"
              className=" px-5 py-4 text-white font-semibold text-lg bg-sky-700 rounded-lg shadow-sm hover:bg-sky-800"
            >
              Ver Código
            </Link>
          </div>
        </div>
        <Carousel showStatus={false} showThumbs={false} className="mt-16">
          <div>
            <img src="images/ClonUNAHPT1.JPG" />
          </div>
          <div>
            <img src="images/ClonUNAHPT2.JPG" />
          </div>
          <div>
            <img src="images/ClonUNAHPT3.JPG" />
          </div>
          <div>
            <img src="images/ClonUNAHPT4.JPG" />
          </div>
          <div>
            <img src="images/ClonUNAHPT5.JPG" />
          </div>
          <div>
            <img src="images/ClonUNAHPT6.JPG" />
          </div>
          <div>
            <img src="images/ClonUNAHPT7.JPG" />
          </div>
        </Carousel>
        <div className="px-5 block lg:px-20 md:px-16 lg:mt-16 md:mt-12 mt-8">
          <p className="text-center text-2xl font-bold">Clon Registro UNAH</p>
          <p className="text-xl mt-5 text-gray-700 ">
            Este clon del registro de la UNAH fue desarrollado de manera
            colaborativa, en la cual participé activamente. Esta experiencia fue
            fundamental para consolidar mis habilidades en el campo del
            desarrollo web. Se implementaron numerosas funcionalidades
            adicionales. Estas incluyeron, entre otras, la capacidad de cargar
            notas, asignar docentes y distintos módulos, como administración,
            docentes y estudiantes.
          </p>
          <div className="mt-10">
            <Link
              to="https://github.com/Kamenriderx/Proyecto"
              target="_blank"
              className=" px-5 py-4 text-white font-semibold text-lg bg-sky-700 rounded-lg shadow-sm hover:bg-sky-800"
            >
              Ver Código
            </Link>
          </div>
        </div>
        <Carousel showStatus={false} showThumbs={false} className="mt-16">
          <div>
            <img src="images/BuscadorBeb.JPG" />
          </div>
          <div>
            <img src="images/BuscadorCli.JPG" />
          </div>
          <div>
            <img src="images/ControlGastos.JPG" />
          </div>
        </Carousel>
        <div className="px-5 block lg:px-20 md:px-16 lg:mt-16 md:mt-12 mt-8">
          <p className="text-center text-2xl font-bold">Otros Proyectos</p>
          <p className="text-xl mt-5 text-gray-700 ">
            A continuación, se presentan diversos proyectos recientes en los que
            he trabajado de manera independiente.
          </p>
          <div className="mt-10">
            <Link
              to="https://github.com/Carlos-Alcerro/Proyectos_Individuales"
              target="_blank"
              className=" px-5 py-4 text-white font-semibold text-lg bg-sky-700 rounded-lg shadow-sm hover:bg-sky-800"
            >
              Ver Código
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Proyectos;
