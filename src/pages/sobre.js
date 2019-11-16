// pages/index.js

import Header from "../components/header";
import Banner from "../components/banner/banner";
import SobrePage from "../components/sobrePage/sobrePage";

const title = "nossovoto - Sobre";

const keywords = {
  name: "keywords",
  content:
    "politica, senado, camara dos deputados, governo, cidadão, direito, constituição"
};

const description = {
  name: "description",
  content: "Criando a ponte entre o governo e o cidadão"
};

const extra_meta = [keywords, description];

const Sobre = ({ initialProps }) => (
  <>
    <Header title={title} extra_meta={extra_meta} />
    <Banner />
    <SobrePage />
  </>
);

Sobre.getInitialProps = async () => {
  return { initialProps: {} };
};

export default Sobre;
