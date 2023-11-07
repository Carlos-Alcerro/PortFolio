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
        Aquí encontrará algunos de los proyectos personales y académicos en los
        cuales he trabajado, tanto de forma individual como en equipo.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 mt-20">
        <Carousel showStatus={false} showThumbs={false} className="mt-5">
          <div>
            <img src="src/images/FiestisimoPT1.JPG" />
          </div>
          <div>
            <img src="src/images/FiestisimoPT2.JPG" />
          </div>
          <div>
            <img src="src/images/FiestisimoPT3.JPG" />
          </div>
          <div>
            <img src="src/images/FiestisimoPT4.JPG" />
          </div>
        </Carousel>
        <div className="px-5 block lg:px-20 md:px-16 lg:mt-16 md:mt-12 mt-8">
          <p className="text-center text-2xl font-bold">
            E-commerce Repostería
          </p>
          <p className="text-xl mt-5 text-gray-700 ">
            Este sitio web fue desarrollado para una repostería, la cual buscaba
            una mayor conexión con sus clientes y a través de esta pueden ver
            los distintos tipos de postres y hacer encargos de los mismos.
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
            <img src="src/images/ClonUNAHPT1.JPG" />
          </div>
          <div>
            <img src="src/images/ClonUNAHPT2.JPG" />
          </div>
          <div>
            <img src="src/images/ClonUNAHPT3.JPG" />
          </div>
          <div>
            <img src="src/images/ClonUNAHPT4.JPG" />
          </div>
          <div>
            <img src="src/images/ClonUNAHPT5.JPG" />
          </div>
          <div>
            <img src="src/images/ClonUNAHPT6.JPG" />
          </div>
          <div>
            <img src="src/images/ClonUNAHPT7.JPG" />
          </div>
        </Carousel>
        <div className="px-5 block lg:px-20 md:px-16 lg:mt-16 md:mt-12 mt-8">
          <p className="text-center text-2xl font-bold">Clon Registro UNAH</p>
          <p className="text-xl mt-5 text-gray-700 ">
            Este clon del registro de la UNAH fue realizado en equipo, en el
            cual participe y el cual fue uno de los cuales me sirvió mucho para
            afianzar mis conocimientos en el desarrollo web, se incluyeron
            muchas más funcionalidades extras aparte de las que ya cuenta el
            sistema como ser, subida de notas, asignación de docentes,
            diferentes módulos como ser el de administración, docentes y
            estudiantes.
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
            <img src="src/images/BuscadorBeb.JPG" />
          </div>
          <div>
            <img src="src/images/BuscadorCli.JPG" />
          </div>
          <div>
            <img src="src/images/ControlGastos.JPG" />
          </div>
        </Carousel>
        <div className="px-5 block lg:px-20 md:px-16 lg:mt-16 md:mt-12 mt-8">
          <p className="text-center text-2xl font-bold">Otros Proyectos</p>
          <p className="text-xl mt-5 text-gray-700 ">
            Aquí se pueden observar diferentes tipos de proyectos en los cuales
            he trabajado últimamente de forma individual.
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
