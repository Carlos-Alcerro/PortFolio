import { BsLinkedin } from "react-icons/bs";
import { AiFillInstagram, AiFillGithub } from "react-icons/ai";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 mt-10 bg-gray-900 w-full lg:px-10 md:px-8 md:py-8 lg:py-10 px-5 py-5">
      <div>
        <p className="uppercase text-lg md:text-xl lg:text-2xl text-white font-bold">
          Carlos Alcerro
        </p>
        <p className="mt-5 text-lg text-white">
          Soy un entusiasta profesional de la tecnología, impulsado por su
          dinamismo y cambio constante. Este entorno me inspira a cultivar y
          perfeccionar constantemente mis habilidades.
        </p>
      </div>
      <div className="block md:text-center lg:text-center">
        <p className="mt-5 md:mt-0 lg:mt-0 uppercase text-lg md:text-xl lg:text-2xl text-white font-bold">
          Social
        </p>
        <div className="mt-5 gap-5 flex md:justify-center">
          <Link
            to="https://www.linkedin.com/in/carlos-eduardo-alcerro-lainez-3ba1ab28b/"
            target="_blank"
          >
            <BsLinkedin color="white" size={30} />
          </Link>
          <Link to="https://www.instagram.com/cealcerro17/" target="_blank">
            <AiFillInstagram color="white" size={30} />
          </Link>
          <Link to="https://github.com/Carlos-Alcerro" target="_blank">
            <AiFillGithub color="white" size={30} />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
