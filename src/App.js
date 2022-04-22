import { Download, Features, SectionWrapper } from "./components";
import assets from "./assets";
import styles from "./styles/Global";

const App = () => {
  return (
    <>
      <SectionWrapper
        title="Tu propia tienda de ingeniosos Nfts. Empieza a Vender & Crecer."
        description="Compra, Almacena, Colecciona NFTS, Cambia & gana Crypot. Join 25+ Personas usando ProNef Marketplace."
        showBtn
        mockupImg={assets.homeHero}
        banner="banner"
      />
      <SectionWrapper
        title="mercado de interfaz de usuario inteligente."
        description="Experimenta una agradable interfaz de ProNef Marketplace. Suavidad constante de colores de un diseño de UI de usuario fluido"
        mockupImg={assets.homeCards}
        reverse
      />
      <Features />
      <SectionWrapper
        title="Despliegue."
        description="ProNef esta creado usando Expo el cual corre nativamente en todos los dispositivos de los usuarios. podes facilmente tener tu App en las manos de la gente."
        mockupImg={assets.feature}
        reverse
      />
      <SectionWrapper
        title="Manera creativa para mostrar tu tienda."
        description="La App contiene dos secciones. La primera seccion lista todos los NFTs mientras que la segunda muesta los detalles de un especifico NFT"
        mockupImg={assets.mockup}
        banner="banner02"
      />
      <Download />

      <div className="px-4 py-2 justify-center items-center bg-primary flex-col text-center banner04">
        <p className={`${styles.pText} ${styles.whiteText}`}>Echo con amor por {" "}
          <span className="bold">JohnnyMzq</span>
        </p>
      </div>
    </>
  );
};

export default App;
