import { useState } from "react";
import { BsList } from "react-icons/bs";
import { IoCloseSharp } from "react-icons/io5";
const Header = () => {
  const [check, setCheck] = useState(false);

  return (
    <>
      <nav className="bg-white px-16 py-3 fixed top-0 w-full z-50">
        <div className="grid md:grid-cols-3 lg:grid-cols-3 grid-cols-2">
          <div className="col-span-1">
            <div className="flex items-center gap-4">
              <img
                src="/src/assets/FotoPerfil.jpeg"
                alt="FotoPerfil"
                className="lg:w-16 lg:h-16 md:w-12 md:g-12 w-10 h-10 rounded-full cursor-pointer"
              />
              <a
                href="#inicio"
                className="uppercase text-sm md:text-base lg:text-lg font-bold text-gray-700 hover:text-purple-600 cursor-pointer"
              >
                Carlos Alcerro
              </a>
            </div>
          </div>
          <div
            className={`col-span-1 lg:flex md:flex items-center md:mt-0 lg:mt-0 mt-5 hidden`}
          >
            <div className="grid grid-cols-3 gap-10">
              <div className="cursor-pointer">
                <a
                  href="#inicio"
                  className="hover:text-purple-600 uppercase text-xs md:text-base lg:text-lg font-bold text-gray-700"
                >
                  Inicio
                </a>
              </div>
              <div className="cursor-pointer">
                <a
                  href="#Acerca"
                  className="hover:text-purple-600 uppercase text-xs md:text-base lg:text-lg font-bold text-gray-700"
                >
                  Acerca de
                </a>
              </div>
              <div className="cursor-pointer">
                <a
                  href="#proyectos"
                  className="hover:text-purple-600 uppercase text-xs md:text-base lg:text-lg font-bold text-gray-700"
                >
                  Proyectos
                </a>
              </div>
            </div>
          </div>
          <div className="lg:hidden md:hidden flex justify-end">
            <button
              onClick={() => setCheck(!check)}
              className="flex items-center px-3 py-2 border rounded text-sky-400 border-sky-500 hover:text-sky-800 hover:border-sky-900"
            >
              {/*  <svg
                className="fill-current h-3 w-3"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg> */}
              {!check ? <BsList size={20} /> : <IoCloseSharp size={20} />}
            </button>
          </div>
          {check && (
            <div className="col-span-2 md:hidden lg:hidden mt-3">
              <ul className="flex flex-col items-center">
                <li>
                  <a
                    href="#inicio"
                    className="text-gray-700 hover:text-purple-600 font-bold uppercase"
                  >
                    Inicio
                  </a>
                </li>
                <li>
                  <a
                    href="#Acerca"
                    className="text-gray-700 hover:text-purple-600 font-bold uppercase"
                  >
                    Acerca de
                  </a>
                </li>
                <li>
                  <a
                    href="#proyectos"
                    className="text-gray-700 hover:text-purple-600 font-bold uppercase"
                  >
                    Proyectos
                  </a>
                </li>
              </ul>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Header;
