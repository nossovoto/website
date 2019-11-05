// pages/index.js

import Header from "../components/header";
import Terms from "../components/terms/terms";
import Banner from "../components/banner/banner";

const title = "nossovoto - Termos e Serviços";

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

const TermsAndServices = ({ initialProps }) => (
  <>
    <Header title={title} extra_meta={extra_meta} />
    <Banner />
    <Terms />
  </>
);

TermsAndServices.getInitialProps = async function() {
  return { initialProps: {} };
};

export default TermsAndServices;
