// pages/index.js

import Header from "../components/header";
import Banner from "../components/banner/banner";
import Contact from "../components/contact/contact";

const title = "nossovoto - Contato";

const keywords = {
  name: "keywords",
  content: "contato, nossovoto, politica"
};

const description = {
  name: "description",
  content: "Sua opinião é muito importante para nós. Entre em contato conosco pelo site ou pelo e-mail contato@nossovoto.com.br. Estamos a disposição para responder seus questionamentos, ouvir suas críticas e sugestões."
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
