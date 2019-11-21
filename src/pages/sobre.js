// pages/index.js

import Header from "../components/header";
import Banner from "../components/banner/banner";
import SobrePage from "../components/sobrePage/sobrePage";

const title = "nossovoto - Sobre";

const keywords = {
  name: "keywords",
  content: "sobre, nossovoto, politica, congresso nacional, brasil, camara federal, senado federal"
};

const description = {
  name: "description",
  content: "O nossovoto aproxima o cidadão da política brasileira, disponibilizando tudo o que ocorre no Senado Federal e na Câmara dos Deputados Federais."
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
