// pages/index.js

import Header from "../components/header";
import Banner from "../components/banner/banner";
import Contact from "../components/contact/contact";

const title = "nossovoto - Contato";

const keywords = {
  name: "keywords",
  content:
    "contato, politica, senado, camara dos deputados, governo, cidadão, direito, constituição"
};

const description = {
  name: "description",
  content: "Criando a ponte entre o governo e o cidadão"
};

const extra_meta = [keywords, description];

const TermsAndServices = ({ initialProps }) => (
  <>
    <Header title={title} extra_meta={extra_meta} />
    <Banner />
    <Contact />
  </>
);

TermsAndServices.getInitialProps = async () => {
  return { initialProps: {} };
};

export default TermsAndServices;
