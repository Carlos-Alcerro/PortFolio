import About from "./About";
import Footer from "./Footer";
import Header from "./Header";
import Inicio from "./Inicio";
import Proyectos from "./Proyectos";
const PaginaPrincipal = () => {
  return (
    <>
      <Header />
      <div className="mt-36">
        <Inicio />
        <About />
        <Proyectos />
      </div>
      <Footer />
    </>
  );
};

export default PaginaPrincipal;
