// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Link } from "react-router-dom";

const Proyectos = () => {
  return (
    <div className="mt-10 py-16 md:py-20 px-4 md:px-8 lg:px-16" id="proyectos">
      <p className="uppercase text-center text-xl md:text-3xl lg:text-4xl font-black">
        Proyectos
      </p>
      <p className="text-center text-xl mt-4 text-gray-700">
        Aquí encontrarás algunos de los proyectos personales y académicos en los
        cuales he trabajado, tanto de forma individual como en equipo.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 mt-10 gap-8 lg">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src="images/Proy1.JPG" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="images/Proy2.JPG" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="images/Proy3.JPG" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="images/Proy4.JPG" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="images/Proy5.JPG" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="images/Proy6.JPG" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="images/Proy7.JPG" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="images/Proy8.JPG" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="images/Proy9.JPG" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="images/Proy10.JPG" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="images/Proy11.JPG" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="images/Proy12.JPG" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="images/Proy13.JPG" />
          </SwiperSlide>
        </Swiper>
        <div className="px-5 block lg:px-20 md:px-16 lg:mt-8 md:mt-7 mt-8">
          <p className="text-center text-xl font-bold p-2 bg-red-500 text-white">
            En progreso
          </p>
          <p className="text-center text-xl font-bold">Restaurante</p>
          <p className="text-lg mt-5 text-gray-700 ">
            Este sitio web representa un restaurante que ha sido desarrollado
            utilizando las tecnologías de NestJS y NextJS. Su objetivo principal
            es mejorar la interacción del usuario, proporcionando una
            experiencia más fluida y satisfactoria. Para lograr este propósito,
            se han implementado diversos módulos, incluyendo funcionalidades
            para usuarios, administradores y cocineros. El enfoque principal de
            este proyecto es aumentar la eficiencia en la atención y servicio
            ofrecido a los usuarios del restaurante.
          </p>
          <div className="mt-5 flex justify-around">
            <Link
              to="https://github.com/Carlos-Alcerro/Backend-NestJs-Proyecto"
              target="_blank"
              className=" font-semibold text-base hover:underline hover:text-blue-600"
            >
              Ver Backend
            </Link>
            <Link
              to="https://github.com/Carlos-Alcerro/Proyecto-Restaurante-NextJS"
              target="_blank"
              className=" font-semibold text-base hover:underline hover:text-blue-600"
            >
              Ver Frontend
            </Link>
          </div>
        </div>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src="images/Teslo1.JPG" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="images/Teslo2.JPG" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="images/Teslo3.JPG" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="images/Teslo4.JPG" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="images/Teslo5.JPG" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="images/Teslo6.JPG" />
          </SwiperSlide>
        </Swiper>
        <div className="px-5 block lg:px-20 md:px-16 lg:mt-12 md:mt-10 mt-8">
          <p className="text-center text-xl font-bold">Tienda de Ropa</p>
          <p className="text-lg mt-5 text-gray-700 ">
            Este sitio web, una tienda de ropa, se ha construido con NextJS con
            el fin de ofrecer una experiencia de compra intuitiva y
            satisfactoria. Además de contar con un menú interactivo para
            explorar los productos, se ha integrado la funcionalidad del carrito
            de compras para facilitar la selección y compra de artículos. La
            plataforma se centra en proporcionar una navegación fluida y
            eficiente, asegurando una experiencia óptima para el usuario final
            durante todo el proceso de compra.
          </p>
          <div className="mt-5">
            <Link
              to="https://github.com/Carlos-Alcerro/teslo-shop"
              target="_blank"
              className=" font-semibold text-base hover:underline hover:text-blue-600"
            >
              Ver Código
            </Link>
          </div>
        </div>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src="images/Quiosco1.JPG" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="images/Quiosco2.JPG" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="images/Quiosco3.JPG" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="images/Quiosco4.JPG" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="images/Quiosco5.JPG" />
          </SwiperSlide>
        </Swiper>
        <div className="px-5 block lg:px-20 md:px-16 lg:mt-12 md:mt-10 mt-8">
          <p className="text-center text-xl font-bold">Quisoco Cafeteria</p>
          <p className="text-lg mt-5 text-gray-700 ">
            Este sitio web fue desarrollado utilizando NextJS con el objetivo de
            ofrecer una experiencia óptima al usuario final al proporcionar un
            menú interactivo y la capacidad de realizar pedidos de manera
            eficiente en una cafetería.
          </p>
          <div className="mt-5">
            <Link
              to="https://github.com/Carlos-Alcerro/Quiosco-Comidas"
              target="_blank"
              className=" font-semibold text-base hover:underline hover:text-blue-600"
            >
              Ver Código
            </Link>
          </div>
        </div>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src="images/FiestisimoPT1.JPG" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="images/FiestisimoPT2.JPG" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="images/FiestisimoPT3.JPG" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="images/FiestisimoPT4.JPG" />
          </SwiperSlide>
        </Swiper>
        <div className="px-5 block lg:px-20 md:px-16 lg:mt-12 md:mt-10 mt-8">
          <p className="text-center text-xl font-bold">E-commerce Repostería</p>
          <p className="text-lg mt-5 text-gray-700 ">
            Se diseñó este sitio web para una repostería con el objetivo de
            fortalecer su relación con los clientes. A través de la plataforma,
            los usuarios pueden explorar la variedad de postres disponible y
            realizar pedidos de manera sencilla.
          </p>
          <div className="mt-5">
            <Link
              to="https://github.com/Carlos-Alcerro/E-commercer-Reposteria"
              target="_blank"
              className=" font-semibold text-base hover:underline hover:text-blue-600"
            >
              Ver Código
            </Link>
          </div>
        </div>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src="images/ClonUNAHPT1.JPG" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="images/ClonUNAHPT2.JPG" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="images/ClonUNAHPT3.JPG" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="images/ClonUNAHPT4.JPG" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="images/ClonUNAHPT5.JPG" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="images/ClonUNAHPT6.JPG" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="images/ClonUNAHPT7.JPG" />
          </SwiperSlide>
        </Swiper>
        <div className="px-5 block lg:px-20 md:px-16 lg:mt-12 md:mt-10 mt-8">
          <p className="text-center text-xl font-bold">Clon Registro UNAH</p>
          <p className="text-lg mt-5 text-gray-700 ">
            Este clon del registro de la UNAH fue desarrollado de manera
            colaborativa, en la cual participé activamente. Esta experiencia fue
            fundamental para consolidar mis habilidades en el campo del
            desarrollo web. Se implementaron numerosas funcionalidades
            adicionales. Estas incluyeron, entre otras, la capacidad de cargar
            notas, asignar docentes y distintos módulos, como administración,
            docentes y estudiantes.
          </p>
          <div className="mt-5">
            <Link
              to="https://github.com/Kamenriderx/Proyecto"
              target="_blank"
              className=" font-semibold text-base hover:underline hover:text-blue-600"
            >
              Ver Código
            </Link>
          </div>
        </div>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src="images/BuscadorBeb.JPG" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="images/BuscadorCli.JPG" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="images/ControlGastos.JPG" />
          </SwiperSlide>
        </Swiper>
        <div className="px-5 block lg:px-20 md:px-16 lg:mt-12 md:mt-10 mt-8">
          <p className="text-center text-xl font-bold">Otros Proyectos</p>
          <p className="text-lg mt-5 text-gray-700 ">
            A continuación, se presentan diversos proyectos recientes en los que
            he trabajado de manera independiente.
          </p>
          <div className="mt-5">
            <Link
              to="https://github.com/Carlos-Alcerro/Proyectos_Individuales"
              target="_blank"
              className=" font-semibold text-base hover:underline hover:text-blue-600"
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
