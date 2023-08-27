import Sidebar from "./components/sidebar";
import TopMenu from "./components/topMenu";

export default function About() {
  return (
    <>
      <Sidebar></Sidebar>
      <TopMenu></TopMenu>
      <div id="about" style={{ width: '100%', marginTop: "100px" }} className="w3-main w3-content w3-padding">
        <div className="w3-container w3-padding-32 w3-center">
          <h3>Acerca de mí, El Programador</h3>
          <img src="https://www.w3schools.com/w3images/chef.jpg" alt="Me" className="w3-image" style={{ display: "block", margin: "auto", width: "800px", height: "533px" }}></img>
          <div className="w3-padding-32">
            <h4><b>Yo soy Marcos y Marcos soy yo</b></h4>
            <h6><i>Con pasión por la verdadera progamación</i></h6>
            <p>Desde que tuve mi primer encuentro con líneas de código, supe que había descubierto mi verdadera pasión. La programación no es simplemente un conjunto de instrucciones para mí, es el lenguaje a través del cual puedo dar vida a mis ideas y crear soluciones que impactan en el mundo. Cada proyecto se convierte en un emocionante rompecabezas que ansío resolver, utilizando lógica, creatividad y una dosis de paciencia. Mi viaje en el mundo de la programación no solo me ha permitido adquirir habilidades técnicas, sino que también me ha enseñado a abrazar el aprendizaje constante y a enfrentar desafíos con determinación. A medida que navego a través de esta apasionante travesía, estoy emocionado por descubrir las infinitas posibilidades que la programación ofrece y por contribuir con mi creatividad al panorama tecnológico en constante evolución.</p>
          </div>
        </div>
      </div>
    </>
  );
}